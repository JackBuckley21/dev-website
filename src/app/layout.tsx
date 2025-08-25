import type {Metadata} from "next";
import {Geist} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const siteUrl = "https://jackbuckley.dev";

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "Jack Buckley | Creative Developer Portfolio",
        template: `%s | Jack Buckley`,
    },
    description: "The developer portfolio of Jack Buckley, a creative developer specializing in modern web and mobile experiences with React, Next.js, and Flutter.",
    keywords: ["Jack Buckley", "Developer", "Portfolio", "React", "Next.js", "TypeScript", "Flutter", "Web Developer", "Mobile Developer"],

    openGraph: {
        title: "Jack Buckley | Creative Developer Portfolio",
        description: "Building modern, user-centric web and mobile experiences.",
        url: siteUrl,
        siteName: "Jack Buckley Portfolio",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Jack Buckley's Portfolio",
            },
        ],
        locale: "en_US",
        type: "website",
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
    },
};


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Jack Buckley | Creative Developer Portfolio',
        url: siteUrl,
        author: {
            '@type': 'Person',
            name: 'Jack Buckley',
            url: siteUrl,
        },
    };

    return (
        <html lang="en">
        <head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
            />
        </head>
        <body
            className={`${geistSans.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}