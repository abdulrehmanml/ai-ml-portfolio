import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/layout/theme-provider"
import { MotionProvider } from "@/components/animations/motion-provider"
import { GoogleAnalytics } from "@next/third-parties/google"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://abdulrehmanmughal.me"),
  title: {
    default: "Abdul Rehman | AI Engineer",
    template: "%s | Abdul Rehman",
  },
  description:
    "Explore Abdul Rehman's AI engineering portfolio featuring machine learning, data analysis, NLP, generative AI, and deployed AI applications.",
  openGraph: {
    type: "website",
    siteName: "Abdul Rehman Portfolio",
    title: "Abdul Rehman | AI Engineer",
    description:
      "Practical AI applications, machine learning projects, and deployment workflows.",
    locale: "en_PK",
  },
  twitter: {
    card: "summary",
    title: "Abdul Rehman | AI Engineer",
    description:
      "Machine learning, generative AI, and practical AI application development.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <MotionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </MotionProvider>
        {process.env.NEXT_PUBLIC_GA_ID ? (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        ) : null}
      </body>
    </html>
  )
}
