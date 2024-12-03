import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Kiwi Nutz Coffee Company",
  description:
    "Corporate coffee machine supplier, based out of New Zealand. Prioritizing quality, exceptional service, and great value isn't what we do, it's who we are.",
  openGraph: {
    title: "Kiwi Nutz Coffee Company",
    description:
      "Corporate coffee machine supplier, based out of New Zealand. Prioritizing quality, exceptional service, and great value isn't what we do, it's who we are. We're here to revolutionize office coffee experience.",
    images: "./../../public/knvector.svg", // Adjust the path as needed
    url: "https://www.kiwinutz.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* Next.js Script Component for Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-X9N313DD2J"
          async
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-X9N313DD2J');
            `,
          }}
        />
      </body>
    </html>
  );
}
