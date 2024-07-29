// __tests__/routing.test.js
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../src/app/page';
import Blog from '../src/app/(routes)/blog/page';
import Showcase from '../src/app/(routes)/showcase/page';
import mockRouter from '../__mock__/next/router';

jest.mock('next/router', () => require('next-router-mock'));

describe('Route Transitions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('navigates from Home to Blog and Showcase', () => {
    render(<Home />);
    
    // Navigate to Blog page
    fireEvent.click(screen.getByText('blog'));
    expect(mockRouter.push).toHaveBeenCalledWith('/blog');

    // Simulate Blog page render
    mockRouter.push.mockImplementationOnce(() => {
      render(<Blog />);
    });
    fireEvent.click(screen.getByText('Go to Home'));

    // Navigate to Showcase page
    render(<Home />);
    fireEvent.click(screen.getByText('Go to Showcase'));
    expect(mockRouter.push).toHaveBeenCalledWith('/showcase');

    // Simulate Showcase page render
    mockRouter.push.mockImplementationOnce(() => {
      render(<Showcase />);
    });
    fireEvent.click(screen.getByText('Go to Home'));
  });

  test('navigates from Blog to Home and Showcase', () => {
    render(<Blog />);
    
    // Navigate to Home page
    fireEvent.click(screen.getByText('Go to Home'));
    expect(mockRouter.push).toHaveBeenCalledWith('/');

    // Simulate Home page render
    mockRouter.push.mockImplementationOnce(() => {
      render(<Home />);
    });
    fireEvent.click(screen.getByText('Go to Blog'));

    // Navigate to Showcase page
    render(<Blog />);
    fireEvent.click(screen.getByText('Go to Showcase'));
    expect(mockRouter.push).toHaveBeenCalledWith('/showcase');

    // Simulate Showcase page render
    mockRouter.push.mockImplementationOnce(() => {
      render(<Showcase />);
    });
    fireEvent.click(screen.getByText('Go to Blog'));
  });

  test('navigates from Showcase to Home and Blog', () => {
    render(<Showcase />);
    
    // Navigate to Home page
    fireEvent.click(screen.getByText('Go to Home'));
    expect(mockRouter.push).toHaveBeenCalledWith('/');

    // Simulate Home page render
    mockRouter.push.mockImplementationOnce(() => {
      render(<Home />);
    });
    fireEvent.click(screen.getByText('Go to Showcase'));

    // Navigate to Blog page
    render(<Showcase />);
    fireEvent.click(screen.getByText('Go to Blog'));
    expect(mockRouter.push).toHaveBeenCalledWith('/blog');

    // Simulate Blog page render
    mockRouter.push.mockImplementationOnce(() => {
      render(<Blog />);
    });
    fireEvent.click(screen.getByText('Go to Showcase'));
  });
});
