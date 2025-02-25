
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
  title: "Halseus",
  description: "Halseus - Local AI solutions",
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
