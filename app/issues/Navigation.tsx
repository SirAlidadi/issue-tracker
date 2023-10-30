import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navigation() {
  return (
    <Button className="w-full mt-4">
      <Link href="/issues/new">New Issue</Link>
    </Button>
  )
}
