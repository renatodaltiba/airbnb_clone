import { Banner } from 'components/Banner'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { LargeCard } from 'components/LargeCard'
import { MediumCard } from 'components/MediumCard'
import { SmallCard } from 'components/SmallCard'

interface IProps {
  exploreData: {
    img: string
    location: string
    distance: string
  }[]
  cardsData: {
    img: string
    title: string
  }[]
}

export default function Home({ exploreData, cardsData }: IProps) {
  return (
    <div>
      <Header />
      <Banner />

      <main className="mx-auto max-w-7xl px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="pb-5 text-4xl font-semibold">Explore Nearby</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) => (
              <SmallCard key={item.img} data={item} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="py-8 text-4xl font-semibold">Live anywhere</h2>

          <div className="-ml-3 flex space-x-3  overflow-scroll p-3 scrollbar-hide">
            {cardsData?.map((item) => (
              <MediumCard key={item.img} data={item} />
            ))}
          </div>
        </section>

        <LargeCard
          data={{
            img: 'https://links.papareact.com/4cj',
            title: 'The Greatest Outdoors',
            description: 'Wishlists curated by airbnb.',
            buttonText: 'Get inspired'
          }}
        />
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  )

  const cardsData = await fetch('https://links.papareact.com/zp1').then((res) =>
    res.json()
  )

  return {
    props: {
      exploreData,
      cardsData
    }
  }
}
