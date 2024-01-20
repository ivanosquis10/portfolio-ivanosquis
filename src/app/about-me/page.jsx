import {
  HeaderAbout,
  Education,
  Skills,
  Contributions,
  MoreAboutMe,
  FooterAbout,
} from "@/components"

export const metadata = {
  title: "Ivanosquis | About me",
  description:
    "Welcome to my programming portfolio, where you can find projects developed in React, Vite.js, NextJS, Tailwind CSS and other technologies. I am a passionate developer with experience in different technologies. Learn more about me, my background and my skills in web development and interface design.",
}

export default function AboutMe() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 text-white sm:px-6">
      <div className="animate-fade-right">
        <HeaderAbout />
      </div>
      <div className="mt-6 grid animate-fade-up grid-cols-1 gap-5 md:grid-cols-2">
        <Education />
        <Skills />
        <Contributions />
        <MoreAboutMe />
        <FooterAbout />
      </div>
    </section>
  )
}
