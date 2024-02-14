import { Twitter, Linkedin, Github, MailOut, Discord } from "iconoir-react"

import { LolIcon } from "@/components/icons/Icons"

export function ContactCard({ url, icon, title, subtitle }) {
  const icons = {
    github: <Github height={40} width={40} />,
    email: <MailOut height={40} width={40} />,
    linkedin: <Linkedin height={40} width={40} />,
    twitter: <Twitter height={40} width={40} />,
    discord: <Discord height={40} width={40} />,
    lol: <LolIcon h={40} w={40} />,
  }

  return (
    <a
      className="flex items-center space-x-3 rounded-xl border border-zinc-700/60 bg-zinc-800/30 p-5 shadow-md ring-2 ring-transparent backdrop-blur-md transition-all ease-in hover:ring-emerald-600"
      href={url}
      rel="noreferrer"
      target="_blank"
    >
      <span className="text-emerald-600 transition-all duration-150 hover:scale-110 hover:text-emerald-500">
        {icons[icon]}
      </span>
      <div className="flex flex-col space-y-[3px]">
        <h5 className="text-base font-semibold leading-none tracking-wide">{title}</h5>
        <span className="text-sm leading-none opacity-60 md:text-base">{subtitle}</span>
      </div>
    </a>
  )
}
