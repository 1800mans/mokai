import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Mokai — Operating System for Precision Agriculture",

  description:
    "Closed-loop, data-driven infrastructure for irrigation, fertigation and agricultural telemetry. Enterprise Distributed Node Architecture for precision agriculture.",
  icons: {
    icon: "/icon.png",
  },

  keywords: [
    "precision agriculture",
    "fertigation",
    "closed loop",
    "data driven",
    "irrigation automation",
    "agricultural telemetry",
    "industrial agriculture",
    "PLC agriculture",
    "smart farming",
    "durian farming",
    "EDNA",
    "Enterprise Distributed Node Architecture",
    "Mokai",
    "fail over logic",
    "Purdue model",
    "ML in agriculture",    
  ],

  authors: [{ name: "Mokai" }],

  metadataBase: new URL("https://mokai.dev"),

  openGraph: {
  title: "Mokai",
  description:
    "Operating System for Precision Agriculture",
  url: "https://mokai.dev",
  siteName: "Mokai",
  locale: "en_US",
  type: "website",
  images: ["/og-image.png"],
  },

  twitter: {
  card: "summary_large_image",
  title: "Mokai",
  description:
    "Closed-loop precision agriculture infrastructure",
  images: ["/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
