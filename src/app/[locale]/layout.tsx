import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CartDrawer } from "@/components/commerce/cart-drawer";
import { CartProvider } from "@/lib/cart/context";
import "../globals.css";

// Montserrat is the only website typeface. `latin-ext` is required for Slovak
// diacritics (č, ľ, š, ž, ô, ...).
const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "City Glory",
    template: "%s · City Glory",
  },
  description:
    "Príbehy, miesta a atmosféru miest premieňame na krásne, zberateľské predmety.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  // Enable static rendering for this locale.
  setRequestLocale(locale);

  return (
    <html lang={locale} className={`${montserrat.variable} scroll-smooth`}>
      <body className="antialiased">
        <NextIntlClientProvider>
          <CartProvider>
            <div className="flex min-h-dvh flex-col">
              <AnnouncementBar />
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <CartDrawer />
          </CartProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
