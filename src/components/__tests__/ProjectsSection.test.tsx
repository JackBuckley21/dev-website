import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProjectsSection from '../ProjectsSection';

// Mock framer-motion
jest.mock('framer-motion', () => {
    const framerMotion = jest.requireActual('framer-motion');
    return {
        ...framerMotion,
        AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
        motion: {
            ...framerMotion.motion,
            div: jest.fn().mockImplementation(({ children, ...props }) => {
                const { layout, initial, animate, exit, transition, ...rest } = props;
                return <div {...rest}>{children}</div>;
            }),
            h2: jest.fn().mockImplementation(({ children, ...props }) => {
                const { variants, ...rest } = props;
                return <h2 {...rest}>{children}</h2>;
            }),
        },
    };
});


// Mock the AnimatedSection component
jest.mock('../AnimatedSection', () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

// Mock the next/image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />;
  },
}));

describe('ProjectsSection', () => {
  beforeEach(() => {
    render(<ProjectsSection />);
  });

  it('renders the main heading', () => {
    const heading = screen.getByRole('heading', { name: /Featured Projects/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders all projects by default', () => {
    const projectTitles = [
      "Health Care Search And Book Platform",
      "B2B Sales & Trade in Platform",
      "Speech Aid For Stroke Victim",
      "Wren Kitchens - Kitchen Planner",
      "Project: Catalyst"
    ];
    projectTitles.forEach(title => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it('renders filter buttons', () => {
    expect(screen.getByRole('button', { name: /All/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Professional/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Personal/i })).toBeInTheDocument();
  });

  it('filters projects when the "Professional" button is clicked', () => {
    fireEvent.click(screen.getByRole('button', { name: /Professional/i }));

    expect(screen.getByText("Health Care Search And Book Platform")).toBeInTheDocument();
    expect(screen.getByText("B2B Sales & Trade in Platform")).toBeInTheDocument();
    expect(screen.getByText("Wren Kitchens - Kitchen Planner")).toBeInTheDocument();

    expect(screen.queryByText("Speech Aid For Stroke Victim")).not.toBeInTheDocument();
    expect(screen.queryByText("Project: Catalyst")).not.toBeInTheDocument();
  });

  it('filters projects when the "Personal" button is clicked', () => {
    fireEvent.click(screen.getByRole('button', { name: /Personal/i }));

    expect(screen.getByText("Speech Aid For Stroke Victim")).toBeInTheDocument();
    expect(screen.getByText("Project: Catalyst")).toBeInTheDocument();

    expect(screen.queryByText("Health Care Search And Book Platform")).not.toBeInTheDocument();
    expect(screen.queryByText("B2B Sales & Trade in Platform")).not.toBeInTheDocument();
    expect(screen.queryByText("Wren Kitchens - Kitchen Planner")).not.toBeInTheDocument();
  });

  it('shows all projects when the "All" button is clicked after a filter was active', () => {
    fireEvent.click(screen.getByRole('button', { name: /Personal/i }));
    fireEvent.click(screen.getByRole('button', { name: /All/i }));

    const projectTitles = [
      "Health Care Search And Book Platform",
      "B2B Sales & Trade in Platform",
      "Speech Aid For Stroke Victim",
      "Wren Kitchens - Kitchen Planner",
      "Project: Catalyst"
    ];
    projectTitles.forEach(title => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });
});
