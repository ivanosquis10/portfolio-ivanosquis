import { Heading } from '..'

export const AboutCard = ({ children, title, level }) => {
  return (
    <div className='p-3 leading-relaxed transition-all border rounded-md border-zinc-800 hover:ring-2 hover:ring-emerald-600 bg-zinc-800/30'>
      <Heading level={level}>
        {title}
      </Heading>
      {children}
    </div>
  )
}
