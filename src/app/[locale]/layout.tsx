import '@/styles/main.scss';
import { IRootParams } from './types';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { locales } from '@/i18n';
import { notFound } from 'next/navigation';
import ThemeRootProvider from '@/components/theme-provider';
import { unstable_setRequestLocale } from 'next-intl/server';
import HeaderPage from '@/components/header';
import Footer from '@/components/footer';
import getLangHeaders from '@/components/get-lang-contents/getLangHeaders';
import ParallaxProviders from '@/components/parallax-provider';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({ children, params: { locale } }: IRootParams) {
  unstable_setRequestLocale(locale);
  const messages = useMessages();

  if (!locales.includes(locale as any)) notFound();

  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
        <ThemeRootProvider>
          <body>
            <HeaderPage locale={locale} langHeader={getLangHeaders()} />
            <ParallaxProviders>{children}</ParallaxProviders>
            <Footer />
          </body>
        </ThemeRootProvider>
      </NextIntlClientProvider>
    </html>
  );
}
