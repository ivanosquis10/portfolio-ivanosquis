import Image from 'next/image'

export default function Skills({ img, nombre }) {
  return (
    <div className="relative group">
      <div className="absolute left-2/4 -top-4 transform -translate-x-2/4 -translate-y-full pointer-events-none transition-opacity opacity-0 group-hover:opacity-100">
        <div className="whitespace-nowrap font-semibold text-sm bg-green-600 text-white rounded-md px-2.5 ">
          {nombre}
        </div>
        <div className="h-2 w-2 bg-green-600 transform rotate-45 -translate-y-2/4 absolute -translate-x-2/4 left-2/4"></div>
      </div>
      <Image width={40} height={40} src={img} alt={`logo de ${nombre}`} />
    </div>
  )
}
