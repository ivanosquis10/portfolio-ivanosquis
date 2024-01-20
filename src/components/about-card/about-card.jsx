import { Heading } from ".."

export function AboutCard({ children, title, level }) {
  return (
    <div className="rounded-md border border-zinc-800 bg-zinc-800/30 p-3 leading-relaxed transition-all hover:ring-2 hover:ring-emerald-600">
      <Heading level={level}>{title}</Heading>
      {children}
    </div>
  )
}
