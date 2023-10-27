import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import CreateIssueSchema from "@/schema/CreateIssueSchema";


export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = CreateIssueSchema.safeParse(body);

  if(!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 })
  }
  
  const instance = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description
    }
  });

  return NextResponse.json(instance, { status: 201 })
}
