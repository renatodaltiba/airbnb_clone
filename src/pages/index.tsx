import { Banner } from 'components/Banner'
import { Header } from 'components/Header'
import { SmallCard } from 'components/SmallCard'

interface IProps {
  exploreData: {
    img: string
    location: string
    distance: string
  }[]
}

export default function Home({ exploreData }: IProps) {
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
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  )

  return {
    props: {
      exploreData
    }
  }
}
