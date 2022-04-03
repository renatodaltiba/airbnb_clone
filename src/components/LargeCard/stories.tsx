import { Meta, Story } from '@storybook/react'
import { LargeCard } from '.'

export default {
  title: 'LargeCard',
  component: LargeCard
} as Meta

export const Default: Story = () => (
  <LargeCard
    data={{
      img: 'https://links.papareact.com/4cj',
      title: 'The Greatest Outdoors',
      description: 'Wishlists curated by airbnb.',
      buttonText: 'Get inspired'
    }}
  />
)
