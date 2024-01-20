import { Hero, Projects, Gratitude } from "@/components"

export default function Home() {
  return (
    <main className="relative mx-auto max-w-6xl overflow-x-hidden text-white">
      <Hero />
      <Projects />
      <Gratitude />
    </main>
  )
}
