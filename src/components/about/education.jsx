import { AboutCard } from "@/components"

export function Education() {
  return (
    <AboutCard level={4} title="Education">
      <p className="mt-3 text-zinc-200">
        More than a year ago, I obtained a TSU degree in computer science from Elias Calixto Pompa
        in Venezuela.
      </p>
      <p className="mt-2 text-zinc-200">
        I have obtained valuable certifications in specialized{" "}
        <span className="span-badge">JavaScript and React</span> courses through recognized
        educational platforms such as Udemy, under the expert guidance of professor codigoconjuan,
        and Platzi.
      </p>
    </AboutCard>
  )
}
