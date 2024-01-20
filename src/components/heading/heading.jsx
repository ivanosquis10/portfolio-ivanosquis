export function Heading({ children, level, variants }) {
  const HeadingTag = `h${level}`

  const classes = {
    h2: "text-3xl font-bold sm:text-4xl",
    h3: "text-2xl font-bold md:text-3xl",
    h4: "text-xl font-bold md:text-2xl",
  }

  return <HeadingTag className={`${classes[`h${level}`]} ${variants || ""}`}>{children}</HeadingTag>
}
