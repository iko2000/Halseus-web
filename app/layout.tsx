
import { ThemeProvider } from "next-themes";
import { Noto_Sans_Georgian } from "next/font/google";
import Header from "@/components/header/header";
import { Analytics } from "@vercel/analytics/react"
import Footer from "@/components/footer/footer";
import "./globals.css";

const defaultUrl = "https://www.halseus.com/"

  export const metadata = {
    metadataBase: new URL(defaultUrl),
    title: "Halseus | Local AI Solutions",
    description: "Halseus offers cutting-edge local AI solutions for businesses and individuals.",
    icons: {
      icon: '/favicon.ico',
    },
    keywords: ["AI improve", "AI custom", "Local AI", "AI Solutions", "Halseus"],
    openGraph: {
      title: "Halseus | Local AI Solutions",
      description: "Halseus offers cutting-edge local AI solutions for businesses and individuals.",
      url: defaultUrl,
      siteName: "Halseus",
      images: [
        {
          url: `${defaultUrl}/assets/open-graph.png`, 
          width: 1200,
          height: 630,
          alt: "Halseus - AI Solutions",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Halseus | Local AI Solutions",
      description: "Halseus offers cutting-edge local AI solutions for businesses and individuals.",
      images: [`${defaultUrl}/assets/open-graph.png`], // Replace with actual image
    }
  };


const georgiaSans = Noto_Sans_Georgian({
  display: "swap",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={georgiaSans.className} suppressHydrationWarning>
      <Analytics/>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
             <Header/>

          <main className="min-h-screen">
          {children}
          </main>
          <Footer/>

        </ThemeProvider>
      </body>
    </html>
  );
}
