import Image from 'next/image'

export interface SmallCardProps {
  data: {
    img: string
    location: string
    distance: string
  }
}

export function SmallCard({ data }: SmallCardProps) {
  return (
    <div className="m-2 mt-5 flex cursor-pointer items-center space-x-4 rounded-xl transition duration-200 ease-out hover:scale-105 hover:bg-gray-100">
      <div className="relative h-16 w-16">
        <Image
          src={data.img}
          layout="fill"
          className="rounded-lg"
          alt={data.location}
        />
      </div>

      <div className="">
        <h2>{data.location}</h2>
        <h3 className="text-gray-500">{data.distance}</h3>
      </div>
    </div>
  )
}
