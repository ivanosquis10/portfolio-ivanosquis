import Link from "next/link"
import { FastArrowRight } from "iconoir-react"

export function Hero() {
  return (
    <section className="flex items-center justify-between animate-fade">
      <div className="relative flex flex-col items-start flex-1 max-w-5xl gap-2 px-4 py-10 md:px-0">
        <img
          alt="detail icon"
          className="hidden -bottom-16 -right-80 -z-10 brightness-50 md:absolute md:block"
          height={500}
          src="/detail.webp"
          width={500}
        />
        <div className="flex items-center gap-2">
          <h1 className="mb-1 text-xl leading-tight tracking-tighter text-gray-300 md:text-2xl">
            Hi, I'm Iván Rodríguez
          </h1>

          <div className="relative">
            <span className="bg-emerald-800 text-green-300 text-sm font-medium me-2 px-2.5 py-0.5 rounded ">Currently Working</span>
            <span className="absolute top-0 flex w-3 h-3 right-1">
              <span className="absolute inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-ping" />
              <span className="relative inline-flex w-3 h-3 bg-green-500 rounded-full" />
            </span>
          </div>
        </div>

        <p className="text-5xl font-extrabold text-pretty md:text-6xl">
          I build <span className="text-emerald-300">Products.</span>{" "}
          <span className="text-pink-300">Systems</span> for web. Passionate about development and
          life.
        </p>

        <div className="relative w-full mt-2 md:ml-2">
          <Link
            className="relative inline-flex items-center justify-center w-full px-5 py-2 overflow-hidden font-bold text-black duration-500 rounded-lg focus:ring-zinc-emerald-400 group bg-zinc-100 hover:scale-95 hover:ring-4 hover:ring-emerald-400 focus:outline-none focus:ring-2 md:w-1/4"
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
