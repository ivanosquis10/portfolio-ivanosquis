import { FaEnvelope, FaDiscord, FaTwitter } from 'react-icons/fa'

export default function Contact() {
  return (
    <section
      id="contacto"
      className="container mx-auto flex justify-center items-center mb-10"
    >
      <div className="mx-auto max-w-5xl mt-10 p-10">
        <div className="">
          <h2 className="text-center text-5xl font-bold tracking-tighter border-dashed border-b-4 border-green-500 w-fit mx-auto mb-10">
            Contactame
          </h2>
          <p className="text-sm lg:text-base text-slate-400 mb-5 leading-relaxed font-medium">
            ¿Tiene alguna pregunta? ¿Está interesado? ¿Tiene alguna sugerencia o
            simplemente quieres saludar? Póngase en contacto conmigo. Estaré
            encantado de hablar.
          </p>
          <p className="text-sm lg:text-base text-slate-400 mb-5 leading-relaxed font-medium">
            Do you have any questions, are you interested? Have a suggestion or
            just want to say hello? Please contact me. I'll be happy to talk to
            you.
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 rounded-md py-1 sm:w-2/5 sm:px-2">
              <FaEnvelope size={25} color="#e2e8f0" />
              <a
                href="mailto:ivanosquis10.12@gmail.com"
                target="_blank"
                className="text-slate-300 text-sm md:text-lg font-thin"
              >
                ivanosquis10.12@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-2 rounded-md py-1 sm:w-2/5 sm:px-2">
              <FaTwitter size={25} color="#e2e8f0" />
              <a
                href="https://twitter.com/ivanosquis13"
                target="_blank"
                className="text-slate-300 text-md md:text-lg font-thin"
              >
                @Ivanosquis13
              </a>
            </div>

            <div className="flex items-center gap-2 rounded-md py-1 sm:w-2/5 sm:px-2">
              <FaDiscord size={25} color="#e2e8f0" />
              <a
                href="https://discordapp.com/users/Ivanosquis10#5178"
                target="_blank"
                className="text-slate-300 text-md md:text-lg font-thin"
              >
                Ivanosquis10#5178
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
