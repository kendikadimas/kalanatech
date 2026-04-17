import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});



export const metadata = {
  title: 'KalanaLabs | Jasa Pembuatan Website Purwokerto & Digital Agency',
  description: 'Jasa pembuatan website Purwokerto profesional, murah, dan modern. Upgrade bisnis Anda dengan website responsif, SEO-friendly, dan performa tinggi di Banyumas.',
  keywords: 'jasa pembuatan website purwokerto, buat website purwokerto, digital agency purwokerto, web developer purwokerto, pembuatan website banyumas',
  openGraph: {
    title: 'KalanaLabs | Jasa Pembuatan Website Purwokerto',
    description: 'Jasa pembuatan website profesional dan modern di Purwokerto.',
    url: 'https://kalanalabs.my.id',
    siteName: 'KalanaLabs',
    locale: 'id_ID',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "KalanaLabs",
              "image": "https://www.kalanalabs.my.id/logo.png",
              "@id": "https://www.kalanalabs.my.id",
              "url": "https://www.kalanalabs.my.id",
              "telephone": "+6285707736885",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Purwokerto",
                "addressLocality": "Purwokerto",
                "addressRegion": "Jawa Tengah",
                "postalCode": "53112",
                "addressCountry": "ID"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -7.4244,
                "longitude": 109.2303
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "08:00",
                "closes": "17:00"
              },
              "sameAs": [
                "https://www.facebook.com/kalanalabs",
                "https://www.instagram.com/kalanalabs"
              ]
            }),
          }}
        />
      </head>

      <body className={`${plusJakartaSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

