import Link from "next/link"
import { MapsArrowDiagonal } from "iconoir-react"

import { GitHubIcon } from "../icons/Icons"

import { CardSpotlight } from "@/components"

export function ProjectCard({ title, description, stack, github, demo }) {
  return (
    <CardSpotlight className="rounded-md bg-zinc-800/30">
      <div className="flex w-full flex-col p-4">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-2xl font-semibold leading-none tracking-tight">{title}</h2>
          <div className="flex items-center gap-2">
            <Link href={demo} rel="noopener" target="_blank" title="Demo">
              <MapsArrowDiagonal className="h-6 w-6 text-gray-400 transition-all hover:animate-waving-hand hover:text-gray-100" />
            </Link>
            <Link
              className="text-gray-400 transition-all hover:text-gray-100 "
              href={github}
              rel="noopener"
              target="_blank"
              title="Repository"
            >
              <GitHubIcon />
            </Link>
          </div>
        </div>
        <p className="text-pretty text-sm text-gray-400">{description}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {stack.map((item) => (
              <div
                key={item}
                className="rounded border border-neutral-800 bg-neutral-900 px-2 py-1 font-mono text-xs"
              >
                <span className="sr-only">{item} icon</span>
                <img
                  alt={`${item} icon`}
                  className="w-6 object-cover md:w-7"
                  height={25}
                  loading="lazy"
                  src={`/skillsImg/${item}.svg`}
                  title={item}
                  width={25}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </CardSpotlight>
  )
}
