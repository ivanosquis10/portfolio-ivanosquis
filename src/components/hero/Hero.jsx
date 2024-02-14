import Link from "next/link"
import { FastArrowRight } from "iconoir-react"

export function Hero() {
  return (
    <section className="flex animate-fade items-center justify-between">
      <div className="relative flex max-w-5xl flex-1 flex-col items-start gap-2 px-4 py-10 md:px-0">
        <img
          alt="detail icon"
          className="-bottom-16 -right-80 -z-10 hidden brightness-50 md:absolute md:block"
          height={500}
          src="/detail.webp"
          width={500}
        />
        <h1 className="mb-1 text-xl leading-tight tracking-tighter text-gray-300 md:text-2xl">
          Hi, I'm Iván Rodríguez
        </h1>

        <p className="text-pretty text-5xl font-extrabold md:text-6xl">
          I build <span className="text-emerald-300">Products.</span>{" "}
          <span className="text-pink-300">Systems</span> for web. Passionate about development and
          life.
        </p>

        <div className="relative mt-2 w-full md:ml-2">
          <Link
            className="focus:ring-zinc-emerald-400 group relative inline-flex w-full items-center justify-center overflow-hidden rounded-lg bg-zinc-100 px-5 py-2 font-bold text-black duration-500 hover:scale-95 hover:ring-4 hover:ring-emerald-400 focus:outline-none focus:ring-2 md:w-1/4"
            href="contact"
          >
            <span className="translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] group-hover:opacity-0">
              Let&apos;s talk
            </span>
            <div className="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100">
              <FastArrowRight />
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
