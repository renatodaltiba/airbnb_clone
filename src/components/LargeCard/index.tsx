import Image from 'next/image'

interface Props {
  data: { img: string; title: string; description: string; buttonText: string }
}

export function LargeCard({ data }: Props) {
  return (
    <section className="relative  py-16">
      <div className="relative h-96 min-w-[300px] cursor-pointer">
        <Image
          src={data.img}
          layout="fill"
          objectFit="cover"
          alt={data.title}
          className="rounded-2xl"
        />
      </div>

      <div className="absolute top-32 left-12">
        <h3 className="mb-3 w-64 text-4xl">{data.title}</h3>
        <p>{data.description}</p>

        <button className="mt-5 rounded-lg bg-gray-900 px-4 py-2 text-sm text-white">
          {data.buttonText}
        </button>
      </div>
    </section>
  )
}
