import type { Metadata } from "next";
import "./globals.css";
import { havenPoznan } from "@/site/site";

export const metadata: Metadata = {
  title: havenPoznan.meta.title,
  description: havenPoznan.meta.description,
  openGraph: {
    type: "website",
    title: havenPoznan.meta.title,
    description: havenPoznan.meta.description,
    images: [havenPoznan.meta.image],
  },
  twitter: {
    card: "summary_large_image",
    title: havenPoznan.meta.title,
    description: havenPoznan.meta.description,
    images: [havenPoznan.meta.image],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pl" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {/* Same display/body families as the haven/* site. */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Darumadrop+One&family=Jua&display=swap"
        />
        {children}
      </body>
    </html>
  );
}
