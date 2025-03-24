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
    "Corporate coffee machine supplier that prioritizes quality service, and great value. Exceptional isn't just what we offer, it's who we are.",
  openGraph: {
    title: "Kiwi Nutz Coffee Company",
    description:
       "Corporate coffee machine supplier that prioritizes quality service, and great value. Exceptional isn't just what we offer, it's who we are.",
    images: [
      {
        url: "../../public/knvector.svg", 
        alt: "Kiwi Nutz Logo of kiwi bird with coffee beans with faces",
      },
    ],
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
