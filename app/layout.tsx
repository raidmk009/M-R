import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Footer } from "@/components/footer";
import { FloatingActions } from "@/components/floating-actions";
import { Header } from "@/components/header";
import { storeSettings } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL("https://mr-store.example.com"),
  title: {
    default: "M-R | متجر إلكتروني فاخر",
    template: "%s | M-R"
  },
  description: "متجر M-R يقدم منتجات مختارة بعناية، طلب مباشر، وتجربة تسوق سريعة على كل الأجهزة.",
  openGraph: {
    title: "M-R | متجر إلكتروني فاخر",
    description: "منتجات مميزة، طلب بسيط، وتجربة شراء احترافية.",
    siteName: "M-R",
    locale: "ar_DZ",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: storeSettings.name,
    email: storeSettings.email,
    telephone: storeSettings.phones[0],
    url: "https://mr-store.example.com",
    sameAs: Object.values(storeSettings.socials)
  };

  return (
    <html lang="ar" dir="rtl">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
        <Script id="structured-data" type="application/ld+json">
          {JSON.stringify(structuredData)}
        </Script>
      </body>
    </html>
  );
}
