import Link from "next/link"

import { GitHubIcon, TwitterIcon, ArrowUpIcon } from "../icons/Icons"

export function Footer() {
  return (
    <footer
      className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-2 text-white md:px-0"
      id="header"
      name="header"
    >
      <p className="text-sm opacity-70">Built by Iván😻</p>
      <span className="text-sm opacity-70">{new Date().getFullYear()} © All rights reserved.</span>
    </footer>
  )
}
