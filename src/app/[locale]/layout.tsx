import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { jsonLdScriptProps } from "react-schemaorg";
import { WebSite } from "schema-dts";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Header } from "@/components/parents/header";
import { Footer } from "@/components/parents/footer";
import localFont from "next/font/local";

import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const myFont = localFont({
  src: "../../../public/fonts/PixelifySans-Medium.ttf",
  variable: "--font-geist-pixel",
  weight: "400",
  style: "normal",
});

// Extract domain to a constant to avoid repetition
const DOMAIN = "https://halseus.com"; // Update this to your actual domain
const SITE_NAME = "Halseus";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Metadata" });
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/assets/images/halseus.png" type="image/png" />
        <link rel="apple-touch-icon" href="/assets/images/halseus.png" />

        {/* Theme Colors */}
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />

        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Manifest for PWA */}
        <link rel="manifest" href="/manifest.json" />

        {/* Structured Data - Organization & Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: SITE_NAME,
              url: DOMAIN,
              logo: `${DOMAIN}/assets/images/halseus.png`,
              image: `${DOMAIN}/assets/images/open-graph.png`,
              description: t("description"),
              contactPoint: {
                "@type": "ContactPoint",
                email: "info@halseus.com",
                contactType: "customer service",
              },
              sameAs: [
                "https://github.com/halseus",
                "https://twitter.com/halseus",
                "https://linkedin.com/company/halseus",
              ],
            }),
          }}
        />
        <script
          {...jsonLdScriptProps<WebSite>({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: t("title"),
            description: t("description"),
            url: DOMAIN,
            inLanguage: locale,
            publisher: {
              "@type": "Organization",
              name: SITE_NAME,
              logo: {
                "@type": "ImageObject",
                url: `${DOMAIN}/assets/images/halseus.png`,
              },
            },
          })}
        />
      </head>
      <body
        className={`${geistSans.variable} ${myFont.variable}  ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>
            <Header />
            {children}
            <Footer />
            </NextIntlClientProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

const locales = ["en", "es", "ja"] as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  // Generate locale-specific URLs
  const currentUrl = `${DOMAIN}/${locale}`;
  const ogImage = `${DOMAIN}/assets/images/open-graph.png`;
  const logoImage = `${DOMAIN}/assets/images/halseus.png`;

  return {
    metadataBase: new URL(DOMAIN),
    title: {
      default: t("title"),
      template: `%s | ${SITE_NAME}`,
    },
    description: t("description"),
    keywords: t("keywords"),
    authors: [{ name: SITE_NAME, url: DOMAIN }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    applicationName: SITE_NAME,
    category: 'technology',
    classification: 'Business',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    other: {
      "google-site-verification": "sVYBYfSJfXdBca3QoqsZtD6lsWVH6sk02RCH4YAbcm8",
    },
    manifest: '/manifest.json',
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/assets/images/halseus.png", type: "image/png" },
      ],
      apple: [
        { url: "/assets/images/halseus.png" },
      ],
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: currentUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          secureUrl: ogImage,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} - ${t("title")}`,
          type: "image/png",
        },
      ],
      locale: locale,
      type: "website",
      emails: ['info@halseus.com'],
      phoneNumbers: ['+1234567890'],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: {
        url: ogImage,
        alt: `${SITE_NAME} - ${t("title")}`,
      },
      creator: "@halseus",
      site: "@halseus",
    },
    appleWebApp: {
      capable: true,
      title: SITE_NAME,
      statusBarStyle: "black-translucent",
      startupImage: [
        {
          url: logoImage,
          media: '(device-width: 320px) and (device-height: 568px)',
        },
      ],
    },
    alternates: {
      canonical: currentUrl,
      languages: {
        en: `${DOMAIN}/en`,
        es: `${DOMAIN}/es`,
        ja: `${DOMAIN}/ja`,
        "x-default": `${DOMAIN}/en`,
      },
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "sVYBYfSJfXdBca3QoqsZtD6lsWVH6sk02RCH4YAbcm8",
      // yandex: "your-yandex-verification-code",
      // bing: "your-bing-verification-code",
    },
  };
}
