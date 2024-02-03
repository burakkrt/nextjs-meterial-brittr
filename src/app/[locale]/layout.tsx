import '@styles/reset.css';
import '@styles/global.css';
import { IRootParams } from './types';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { locales } from '@/i18n';
import { notFound } from 'next/navigation';
import ThemeRootProvider from '@/components/theme-provider';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({ children, params: { locale } }: IRootParams) {
  const messages = useMessages();

  if (!locales.includes(locale as any)) notFound();

  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
        <ThemeRootProvider>
          <body>{children}</body>
        </ThemeRootProvider>
      </NextIntlClientProvider>
    </html>
  );
}
