import { render, screen } from '@testing-library/react'

import SmallCard from '.'

describe('<SmallCard />', () => {
  it('should render the heading', () => {
    const { container } = render(<SmallCard />)

    expect(screen.getByRole('heading', { name: /SmallCard/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
