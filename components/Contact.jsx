import { FaEnvelope, FaDiscord, FaLinkedin } from 'react-icons/fa'

const links = [
  {
    id: 1,
    name: 'ivanosquis10.12@gmail.com',
    href: 'mailto:ivanosquis10.12@gmail.com',
    label: 'icono para redirección al gmail de Ivanosquis',
    icon: <FaEnvelope size={20} color='#e2e8f0' />
  },
  {
    id: 2,
    name: 'Iván Rodríguez',
    href: 'https://ve.linkedin.com/in/iv%C3%A1n-rodr%C3%ADguez-519a85216',
    label: 'icono para redirección al linkedin de Ivanosquis',
    icon: <FaLinkedin size={20} color='#e2e8f0' />
  },
  {
    id: 3,
    name: 'Ivanosquis10#5178',
    href: 'https://discordapp.com/users/Ivanosquis10#5178',
    label: 'icono para redirección al discord de Ivanosquis',
    icon: <FaDiscord size={20} color="#e2e8f0" />
  }
]

export function Contact () {
  return (
    <section
      id="contacto"
      className="container mx-auto flex justify-center items-center mb-10"
    >
      <div className="mx-auto max-w-5xl mt-10 p-10">
        <h2 className="text-center text-5xl font-bold tracking-tighter border-dashed border-b-4 border-green-500 w-fit mx-auto mb-10">
          Contáctame
        </h2>
        <p className="text-base lg:text-lg text-slate-50 mb-5 leading-relaxed font-thin">
          Puede comunicarse conmigo en cualquiera de mis redes, estaré encantado de participar en algún proyecto, oferta de trabajo o simplemente hablar un rato.
        </p>
        <div className="flex flex-col gap-2">
          {
            links.map(link => (
              <div key={link.id} className="flex items-center gap-2 rounded-md py-1 sm:w-2/5 sm:px-2">
                {link.icon}
                <a
                  href={link.href}
                  target="_blank"
                  className="text-slate-200 text-sm md:text-lg font-thin"
                  rel="noreferrer"
                  aria-label={link.label}
                >
                  {link.name}
                </a>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}
