import Link from "next/link"

import { ArrowRightIcon } from "@/components/icons/Icons"

export function FooterAbout() {
  return (
    <div className="rounded-md border border-zinc-800 bg-zinc-800/30 p-3 text-center transition-all hover:ring-2 hover:ring-emerald-600 md:col-span-2">
      <p className="mt-3 leading-snug text-zinc-200">
        If you have any questions, suggestions or just want to say hello, feel free to contact me.
      </p>
      <Link className="button-ligth mx-auto rounded-xl md:w-1/4" href="/contact">
        My social networks
        <ArrowRightIcon />
      </Link>
    </div>
  )
}
