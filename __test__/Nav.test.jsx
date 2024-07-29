import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Nav from '../src/components/nav';
import { IntersectionObserverMock } from '../__mock__/IntersectionObserverMock';

describe('Nav', () => {
  beforeEach(() => {
    window.IntersectionObserver = IntersectionObserverMock;
  });

  it('renders the logo', () => {
    render(<Nav />);
    const logoElement = screen.getByText(/xCaria/i);
    expect(logoElement).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Nav />);
    const showcaseLink = screen.getByText(/Showcase/i);
    const blogLink = screen.getByText(/Blog/i);
    expect(showcaseLink).toBeInTheDocument();
    expect(blogLink).toBeInTheDocument();
  });

  it('renders action buttons', () => {
    render(<Nav />);
    const loginButton = screen.getByText(/Login/i);
    const requestDemoButton = screen.getByText(/Request Demo/i);
    expect(loginButton).toBeInTheDocument();
    expect(requestDemoButton).toBeInTheDocument();
  });

  // it('changes background color on scroll', () => {
  //   render(<Nav />);
  //   const header = screen.getByRole('banner');
  //   expect(header).toHaveClass('bg-zinc-900/0');
  //   // Simulate the scroll effect and change in intersection
  //   window.IntersectionObserver.prototype.callback([{ isIntersecting: false }]);
  //   expect(header).toHaveClass('bg-zinc-900/500');
  // });
});
