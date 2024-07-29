import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Page from '../src/app/page';

describe('Page', () => {
  it('renders a heading', () => {
    render(<Page />);
    const heading = screen.getByRole('heading', { name: /See our working business use cases for AI/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders a paragraph', () => {
    render(<Page />);
    const paragraph = screen.getByText(/Explore how AI is revolutionizing industries./i);
    expect(paragraph).toBeInTheDocument();
  });

});






