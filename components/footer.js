import Image from 'next/image'

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
            className="p-1 rounded-md shadow shadow-green-900 ease-in-out duration-300 hover:cursor-pointer"
            target="_blank"
          >
            <Image
              width={30}
              height={30}
              className="bg-cover"
              src="/twitter.svg"
              alt="logo twitter"
            />
          </a>

          <a
            className="p-1 rounded-md shadow shadow-green-900 ease-in-out duration-300 hover:cursor-pointer"
            href="https://github.com/ivanosquis10"
            target="_blank"
          >
            <Image
              width={30}
              height={30}
              className="bg-cover"
              src="/github.svg"
              alt="logo github"
            />
          </a>

          <a
            href="https://discordapp.com/users/Ivanosquis10#5178"
            className="p-1 rounded-md shadow shadow-green-900 ease-in-out duration-300 hover:cursor-pointer"
            target="_blank"
          >
            <Image
              width={30}
              height={30}
              className="bg-cover fill-white"
              src="/discord.svg"
              alt="logo discord"
            />
          </a>
          <div>
            <a>pa arriba</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
