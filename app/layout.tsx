
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Noto_Sans_Georgian } from "next/font/google";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

  export const metadata = {
    metadataBase: new URL(defaultUrl),
    title: "Halseus | Local AI Solutions",
    description: "Halseus offers cutting-edge local AI solutions for businesses and individuals.",
    keywords: ["AI", "Machine Learning", "Local AI", "AI Solutions", "Halseus"],
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
    },
    alternates: {
      canonical: defaultUrl,
    },
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
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen">
            <Header/>
          {children}
          <Footer/>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
