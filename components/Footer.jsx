import { FaTwitter, FaGithub, FaDiscord, FaArrowUp } from 'react-icons/fa'
const links = [
  {
    id: 1,
    url: 'https://twitter.com/ivanosquis13',
    title: 'twitter',
    icon: <FaTwitter size={25} />
  },
  {
    id: 2,
    url: 'https://github.com/ivanosquis10',
    title: 'github',
    icon: <FaGithub size={25} />
  },
  {
    id: 3,
    url: 'https://discordapp.com/users/Ivanosquis10#5178',
    title: 'discord',
    icon: <FaDiscord size={25} />
  },
  {
    id: 4,
    url: '#header',
    title: 'subir al inicio',
    icon: <FaArrowUp size={25} />
  }
]

export function Footer () {
  return (
    <footer id="footer" className="w-full px-10 py-5 bg-slate-950/30">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <div>
          <p className="leading-none text-white font-bold mb-1">
            Made by Iván❤️
          </p>
          <p className="leading-none text-sm text-gray-200 font-thin mb-5 md:mb-1">
            Copyright© 2023
          </p>
        </div>
        <div className="flex items-center justify-end gap-x-3">
          {
            links.map(link => (
            <a
              key={link.id}
              href={link.url}
              className="p-1 rounded-md bg-slate-800/80 hover:cursor-pointer hover:scale-110"
              target={link.url !== '#header' ? '_blank' : undefined}
              rel={link.url !== '#header' ? 'noreferrer' : undefined}
              aria-label={`boton de ${link.title}`}
            >
            {link.icon}
          </a>
            ))
          }
        </div>
      </div>
    </footer>
  )
}
