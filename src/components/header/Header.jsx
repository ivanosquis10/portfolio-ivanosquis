import Link from "next/link"
import { Github, Twitter, Linkedin } from "iconoir-react"

import { cn } from "@/libs/utils"
import { headerLinks } from "@/data"

export function Header() {
  const iconSize = 23
  const stroke = "2.5"
  const className = "text-gray-400 transition-all duration-150"

  const socialLinks = [
    {
      id: 1,
      name: "Twitter",
      href: "https://twitter.com/ivanosquis13",
      icon: (
        <Twitter
          className={cn(className, "hover:text-blue-300")}
          height={iconSize}
          name="Twitter"
          stroke={stroke}
          width={iconSize}
        />
      ),
    },
    {
      id: 2,
      name: "GitHub",
      href: "https://github.com/ivanosquis10",
      icon: (
        <Github
          className={cn(className, "hover:text-gray-300")}
          height={iconSize}
          name="GitHub"
          stroke={stroke}
          width={iconSize}
        />
      ),
    },
    {
      id: 3,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/iv%C3%A1n-rodr%C3%ADguez-web/",
      icon: (
        <Linkedin
          className={cn(className, "hover:text-blue-600")}
          height={iconSize}
          name="LinkedIn"
          stroke={stroke}
          width={iconSize}
        />
      ),
    },
  ]

  return (
    <div className="top-0 z-40 w-full py-3 font-medium bg-zinc-900/50 backdrop-blur md:sticky">
      <div className="max-w-6xl p-4 mx-auto md:p-0">
        <div className="flex flex-col items-center justify-between w-full md:flex-row">
          <Link
            aria-label="logo redirection icon"
            className="rounded-lg cursor-pointer"
            href="/"
          >
            <img
              alt="Ivanosquis logo"
              className="w-12 h-12 transition-all duration-300 border rounded-lg border-zinc-700 hover:ring-2 hover:ring-green-500 md:h-10 md:w-10"
              height={35}
              src="/avatar.webp"
              width={35}
            />
            <span className="sr-only">Ivanosquis</span>
          </Link>
          <div className="flex flex-col items-center justify-center mt-3 space-y-3 md:mt-0 md:flex-row md:space-x-7 md:space-y-0">
            <div className="flex flex-row space-x-7">
              {headerLinks.map((link) => (
                <Link
                  key={link.title}
                  className="text-sm text-gray-400 transition-all duration-150 hover:text-gray-100"
                  href={link.url}
                >
                  {link.url}
                </Link>
              ))}
            </div>
            <div>
              <div className="flex items-center justify-center space-x-5 border-neutral-700 md:border-l md:pl-6">
                {socialLinks.map((link) => (
                  <Link key={link.title} href={link.href}>
                    {link.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
