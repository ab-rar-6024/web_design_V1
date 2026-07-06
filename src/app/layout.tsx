import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "APM Group - Automotive & IoT Solutions",
  description: "APM delivers certified speed governors, GPS tracking, and safety systems built for fleets, schools, and transport operators across India.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        {/* Prevent flash of wrong theme/direction on page load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('apm-theme'),l=localStorage.getItem('apm-lang');if(t)document.documentElement.setAttribute('data-theme',t);if(l){document.documentElement.setAttribute('lang',l);document.documentElement.setAttribute('dir',l==='ar'?'rtl':'ltr');}}catch(e){}`,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        style={{ backgroundColor: 'var(--background)' }}
        className="min-h-full flex flex-col font-sans selection:bg-cyan-bright selection:text-navy-dark"
      >
        <CustomCursor />
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          {/* Gradient fade separator — transitions page bg into the blue footer */}
          <div
            style={{
              height: '120px',
              background: 'linear-gradient(to bottom, transparent 0%, var(--footer-fade) 100%)',
              marginBottom: '-1px',
            }}
            aria-hidden="true"
          />
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
