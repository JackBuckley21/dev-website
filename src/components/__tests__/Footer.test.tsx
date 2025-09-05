import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', () => {
  it('renders the footer with the current year and copyright notice', () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear();
    const expectedText = `© ${currentYear} Jack Buckley. All Rights Reserved.`;

    const footerText = screen.getByText(expectedText);
    expect(footerText).toBeInTheDocument();
  });
});
