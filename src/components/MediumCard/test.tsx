import { render, screen } from '@testing-library/react'

import MediumCard from '.'

describe('<MediumCard />', () => {
  it('should render the heading', () => {
    const { container } = render(<MediumCard />)

    expect(screen.getByRole('heading', { name: /MediumCard/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
