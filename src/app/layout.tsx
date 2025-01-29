import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VERO - Premium Bebek Ürünleri Üretimi',
  description: 'Sektörün önde gelen premium bebek ürünleri üreticisi, B2B ortaklıklar ve üretim çözümleri sunuyoruz.',
  keywords: 'bebek ürünleri üretimi, bebek giyim üreticisi, bebek odası ürünleri üretimi, B2B bebek ürünleri',
  openGraph: {
    title: 'VERO - Premium Bebek Ürünleri Üretimi',
    description: 'Sektörün önde gelen premium bebek ürünleri üreticisi, B2B ortaklıklar ve üretim çözümleri sunuyoruz.',
    type: 'website',
    locale: 'tr_TR',
    siteName: 'VERO Üretim',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VERO - Premium Bebek Ürünleri Üretimi',
    description: 'Sektörün önde gelen premium bebek ürünleri üreticisi, B2B ortaklıklar ve üretim çözümleri sunuyoruz.',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>

        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* LinkedIn Insight */}
        <Script id="linkedin-insight" strategy="afterInteractive">
          {`
            _linkedin_partner_id = "${process.env.NEXT_PUBLIC_LINKEDIN_ID}";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            (function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);})(window.lintrk);
          `}
        </Script>

        {/* HotJar */}
        <Script id="hotjar" strategy="afterInteractive">
          {`
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:${process.env.NEXT_PUBLIC_HOTJAR_ID},hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>

        {/* Schema.org markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'VERO Üretim',
              description: 'Sektörün önde gelen premium bebek ürünleri üreticisi',
              url: 'https://vero-manufacturing.com',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+90-xxx-xxx-xxxx',
                contactType: 'sales',
                availableLanguage: ['Turkish', 'English'],
              },
              sameAs: [
                'https://www.linkedin.com/company/vero-manufacturing',
                'https://twitter.com/veromanufacturing',
                'https://facebook.com/veromanufacturing',
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} h-full`}>
        <div className="min-h-screen bg-white">
          <Navigation />
          <div className="pt-16">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
} 