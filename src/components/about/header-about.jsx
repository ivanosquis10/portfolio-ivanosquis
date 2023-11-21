import { Heading } from '@/components'

export const HeaderAbout = () => {
  return (
    <div>
      <span className='inline-block text-xl font-semibold text-emerald-400'>¿Who am I?</span>
      <Heading level={2}>About me</Heading>

      <p className="mt-3 leading-relaxed text-gray-300 ">
        Hi! {"I'm"} Iván Rodríguez, a passionate <span className='span-badge'>frontend developer</span> and technology lover. Let me tell you a little bit more about me. With only 23 years old, I graduated as a TSU in computer science in Venezuela, where I acquired the knowledge and skills necessary to embark on this exciting world of programming, and {"I'm"} very excited to develop my career.
      </p>
    </div>
  )
}
