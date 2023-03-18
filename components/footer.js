import { FaTwitter, FaGithub, FaDiscord, FaArrowUp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer id="footer" className="w-full px-10 py-5 bg-slate-800">
      <div className="flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="">
          <p className="leading-none text-white font-bold mb-1">
            Made by Iván❤️
          </p>
          <p className="leading-none text-sm text-gray-200 font-thin mb-5 md:mb-1">
            Copyright© 2023
          </p>
        </div>

        <div className="flex items-center justify-end gap-x-3">
          <a
            href="https://twitter.com/ivanosquis13"
            className="p-1 rounded-md bg-slate-700 hover:cursor-pointer"
            target="_blank"
          >
            <FaTwitter size={25} />
          </a>

          <a
            className="p-1 rounded-md bg-slate-700 hover:cursor-pointer"
            href="https://github.com/ivanosquis10"
            target="_blank"
          >
            <FaGithub size={25} />
          </a>

          <a
            href="https://discordapp.com/users/Ivanosquis10#5178"
            className="p-1 rounded-md bg-slate-700 hover:cursor-pointer"
            target="_blank"
          >
            <FaDiscord size={25} />
          </a>
          <a
            href="#header"
            className="p-1 rounded-md bg-slate-700 hover:cursor-pointer"
          >
            <FaArrowUp size={25} />
          </a>
        </div>
      </div>
    </footer>
  )
}
