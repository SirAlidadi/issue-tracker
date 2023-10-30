import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import prisma from "@/prisma/client";
import Badge from "@/components/Badge";
import Navigation from "./Navigation";


export default async function IssuePage() {
  const issues = await prisma.issue.findMany();

  return (
    <div className="max-w-xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>Issue</TableHead>
            <TableHead className="hidden md:table-cell">Status</TableHead>
            <TableHead className="hidden md:table-cell">Created</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {issues.map((issue) => (
            <TableRow key={issue.id}>
              <TableCell>{issue.id}</TableCell>
              <TableCell>{issue.title}</TableCell>
              <TableCell><Badge status={issue.status} /></TableCell>
              <TableCell>{issue.createdAt.toDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Navigation />
    </div>
  )
}
