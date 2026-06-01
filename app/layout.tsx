import type { Metadata } from 'next';
import { Red_Hat_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
const redHatDisplay = Red_Hat_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-red-hat-display',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://alpha-commercialcleaning-sydney.com.au/'),
  alternates: {
    canonical: 'https://alpha-commercialcleaning-sydney.com.au/',
  },
  title: 'Commercial Cleaning Sydney | Alpha Clean Group',
  description:
    'Sydney-wide commercial cleaning across CBD, North Sydney, Eastern Suburbs, Inner West, Hills District and Western Sydney. Offices, strata, medical, childcare, gym, warehouse and end of lease — fully insured local crews.',
  keywords: [
    'commercial cleaning Sydney',
    'office cleaning Sydney',
    'Sydney cleaning company',
    'Sydney CBD office cleaning',
    'commercial cleaners Sydney',
    'after hours office cleaning Sydney',
    'strata cleaning Sydney',
    'medical centre cleaning Sydney',
    'childcare cleaning Sydney',
    'warehouse cleaning Sydney',
    'end of lease cleaning Sydney',
    'eco-friendly cleaning services',
    'professional cleaning Sydney',
    'commercial cleaning services near me',
    'gym cleaning Sydney',
    'office cleaning services',
    'fully insured cleaners Sydney',
    'commercial cleaning company',
    'industrial cleaning Sydney',
    'retail cleaning Sydney',
  ],
  openGraph: {
    title: 'Commercial Cleaning Sydney | Alpha Clean Group',
    description:
      "Sydney's full-coverage commercial cleaning team. Offices, strata, medical, childcare, gyms, warehouses, and end of lease — across every district, with insured crews and flexible after-hours scheduling.",
    type: 'website',
    url: 'https://alpha-commercialcleaning-sydney.com.au/',
    siteName: 'Alpha Clean Group',
    images: [
      {
        url: 'https://alpha-commercialcleaning-sydney.com.au/meta.png',
        width: 800,
        height: 600,
        alt: 'Alpha Clean Group Sydney',
      },
    ],
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Cleaning Sydney | Alpha Clean Group',
    description:
      'Sydney commercial cleaning — CBD to the Hills, Eastern Suburbs to Western Sydney. Offices, strata, medical, childcare, gyms, warehouses. Insured crews, after-hours scheduling.',
    images: [
      {
        url: 'https://alpha-commercialcleaning-sydney.com.au/meta.png',
        alt: 'Alpha Clean Group Sydney',
      },
    ],
    site: '@AlphaGroupAU',
    creator: '@AlphaGroupAU',
  },
  authors: [
    {
      name: 'Alpha Clean Group Sydney Team',
    },
  ],
  publisher: 'Alpha Clean Group Sydney',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="57x57" href="/fav/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/fav/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/fav/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/fav/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/fav/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/fav/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/fav/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/fav/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/fav/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/fav/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/fav/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/fav/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/fav/favicon-16x16.png" />
        <link rel="manifest" href="/fav/manifest.json" />
        <meta name="msapplication-TileColor" content="#12a400" />
        <meta name="msapplication-TileImage" content="/fav/ms-icon-144x144.png" />
        <meta name="theme-color" content="#12a400" />
        <meta name="theme-color" content="#12a400" />
      </head>
      <body
        className={`${redHatDisplay.variable} font-sans antialiased min-h-screen flex flex-col bg-white overflow-x-hidden`}
      >
        <Header />
        <main className="flex-grow w-full overflow-x-hidden">
          <div>{children}</div>
        </main>
        <Footer />
        <GoogleAnalytics ga_id="G-880ERL1VW9" />
      </body>
    </html>
  );
}
