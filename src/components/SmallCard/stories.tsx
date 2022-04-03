import { Meta, Story } from '@storybook/react'
import { SmallCard, SmallCardProps } from '.'

export default {
  title: 'SmallCard',
  component: SmallCard
} as Meta

export const Default: Story<SmallCardProps> = (args) => <SmallCard {...args} />
