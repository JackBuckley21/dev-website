import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactSection from '../ContactSection';

// Mock the AnimatedSection component as it's not relevant to the ContactSection tests
jest.mock('../AnimatedSection', () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe('ContactSection', () => {
  beforeEach(() => {
    render(<ContactSection />);
  });

  it('renders the main heading', () => {
    const heading = screen.getByRole('heading', { name: /Get In Touch/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders the introductory paragraph', () => {
    const paragraph = screen.getByText(/I'm currently open to new opportunities and collaborations./i);
    expect(paragraph).toBeInTheDocument();
  });

  it('renders the email link with the correct href', () => {
    const emailLink = screen.getByRole('link', { name: /Email Me/i });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', 'mailto:jack.buckley21@gmail.com');
  });

  it('renders the GitHub link with the correct href and attributes', () => {
    const githubLink = screen.getByRole('link', { name: /github/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/JackBuckley21');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders the LinkedIn link with the correct href and attributes', () => {
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/jack-buckley-ux/');
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
