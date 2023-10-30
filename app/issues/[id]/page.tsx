import Badge from "@/components/Badge";
import TypographyH1 from "@/components/TypographyH1";
import prisma from "@/prisma/client";
import Markdown from 'react-markdown'

interface Props {
  params: { id: string }
}

export default async function IssueDetailPage({ params: { id } }: Props) {
const issue = await prisma.issue.findUnique({ where: { id: parseInt(id) } });

  return (
    <div className="max-w-3xl overflow-hidden">
      <TypographyH1>{issue?.title}</TypographyH1>
      <div className="flex flex-row gap-5 mt-4">
        <Badge status={issue?.status}/>
        <p>{issue?.createdAt.toString()}</p>
      </div>
      
      <div className="mt-5 border rounded-xl p-4">
        <Markdown className="prose prose-slate">{issue?.description}</Markdown>
      </div>
    </div>
  )
}
