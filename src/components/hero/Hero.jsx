import Link from "next/link"

import { ArrowRightIconFilled } from "@/components/icons/Icons"

export function Hero() {
  return (
    <section className="flex animate-fade items-center justify-between border-b border-zinc-800">
      <div className="relative flex max-w-[980px] flex-1 flex-col items-start gap-2 px-4 py-12 md:px-2">
        <h1 className="mb-3 text-4xl font-bold leading-tight tracking-tighter md:text-6xl">
          Hi, I'm <span className="text-emerald-400">Iván Rodríguez</span>
        </h1>

        <p className="text-base text-gray-300">
          I&apos;m passionate{" "}
          <span className="border-b-2 border-dotted border-emerald-400 font-bold">
            Frontend Developer
          </span>{" "}
          who creates websites and web applications for unique user experiences. I&apos;m proactive,
          constantly learning, and striving to improve.
        </p>
        <div className="relative my-1">
          <Link className="button-ligth rounded-md hover:scale-105" href="contact">
            Let's talk
            <ArrowRightIconFilled />
          </Link>
        </div>
      </div>
    </section>
  )
}
