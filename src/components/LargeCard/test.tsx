import { render, screen } from '@testing-library/react'

import LargeCard from '.'

describe('<LargeCard />', () => {
  it('should render the heading', () => {
    const { container } = render(<LargeCard />)

    expect(screen.getByRole('heading', { name: /LargeCard/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
