import Image from 'next/image'

export function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
        alt="banner"
      />

      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>

        <button className="my-3 rounded-full bg-white px-10 py-4 font-bold text-purple-500 shadow-md transition duration-150 hover:shadow-xl active:scale-90">
          Im flexible
        </button>
      </div>
    </div>
  )
}
