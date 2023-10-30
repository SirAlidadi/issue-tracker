import { TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton"
import Navigation from "./Navigation";


export default async function IssuePageLoading() {
  const issues = [1,2,3,4,5];

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
            <TableRow key={issue}>
              <TableCell><Skeleton className="h-4 w-24"/></TableCell>
              <TableCell><Skeleton className="h-4 w-24"/></TableCell>
              <TableCell><Skeleton className="h-4 w-24"/></TableCell>
              <TableCell><Skeleton className="h-4 w-24"/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Navigation />
    </div>
  )
}
