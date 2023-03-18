import Image from 'next/image'

export default function Skills({ img, nombre }) {
  return <Image width={30} height={30} src={img} alt={`logo de ${nombre}`} />
}
