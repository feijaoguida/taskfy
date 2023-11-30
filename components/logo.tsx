import Link from "next/link"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { headingFont } from "./font"

export const Logo = () => {
  return (
    <Link href='/'>
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image 
          src="/logo.svg"
          alt="Logo"
          height={30}
          width={30}
        />
        <p className={cn("text-lg text-neutral-700 pb-1", headingFont)}>
          Taskfy
        </p>
      </div>
    </Link>
  )
}