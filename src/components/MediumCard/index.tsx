import Image from 'next/image'

interface Props {
  data: {
    img: string
    title: string
  }
}

export function MediumCard({ data }: Props) {
  return (
    <div className="cursor-pointer rounded-lg transition duration-300 ease-out hover:scale-105">
      <div className="relative h-80 w-80">
        <Image
          src={data.img}
          layout="fill"
          alt={data.title}
          className="rounded-lg"
        />
      </div>
      <h3 className="text-2xl" mt-3>
        {data.title}
      </h3>
    </div>
  )
}
