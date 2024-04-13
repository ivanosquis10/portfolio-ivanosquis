
import { Hero, Projects, Gratitude } from "@/components"

export default function Home() {
  return (
    <main className="relative max-w-6xl mx-auto overflow-x-hidden text-white">
      <Hero />
      <Projects />
      <Gratitude />
    </main>
  )
}
