"use client"

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";


export default function NavBar() {
  const pathnames = usePathname()
  const links = [
    {label: "Dashboard", href: "/"},
    {label: "Issues", href: "/issues"}
  ]

  return (
    <nav className="flex space-x-5 p-4 border border-b items-center">
      <Link href="/"><AiFillBug /></Link>

      <ul className="flex space-x-5">
        {links.map(link => (
          <li><Link className={classNames({
            "hover:text-zinc-500": true,
            "transition-colors": true,
            "text-zinc-500": pathnames === link.href && true
          })} href={link.href}>{link.label}</Link></li>
        ))}
      </ul>
    </nav>
  )
}
