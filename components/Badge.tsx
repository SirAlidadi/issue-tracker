import { Badge as PureBadge } from "@/components/ui/badge"
import { Status } from "@prisma/client"


const statusMap: Record<Status, {label: string, color: string}> = {
  OPEN: {label: "Open", color: "bg-red-500"},
  IN_PROGRESS: {label: "In Progress", color: "bg-purple-500"},
  CLOSED: {label: "Closed", color: "bg-green-500"}
}

export default function Badge({ status }: {status: Status | undefined}) {
  if(status === undefined) {
    throw Error("you must be send status for badge component.")
  }
  return <PureBadge className={statusMap[status].color} variant="outline">{statusMap[status].label}</PureBadge>
}
