import { Meta, Story } from '@storybook/react'
import { MediumCard, MediumCardProps } from '.'

export default {
  title: 'MediumCard',
  component: MediumCard
} as Meta

export const Default: Story<MediumCardProps> = (args) => (
  <MediumCard {...args} />
)
