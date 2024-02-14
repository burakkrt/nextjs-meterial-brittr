import HomeContainer from '@/containers/home/page';
import { unstable_setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { IParams } from './types';
import { locales } from '@/i18n';
import {
  langMetaConvert,
  langCanonicalUrls,
} from '@/components/get-lang-contents/lang-meta-convert';

// Static meta tags rendering
export async function generateMetadata({ params: { locale } }: IParams) {
  const multiMetadata = await getTranslations({ locale, namespace: 'Metadata' });

  // icons ve apple-icons eklemek için takip et :  https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons#image-files-ico-jpg-png
  return {
    title: multiMetadata('Home.title'),
    description: multiMetadata('Home.description'),
    keywords: multiMetadata('Home.keywords'),
    metadataBase: new URL(multiMetadata('Home.metadataBase.baseUrl')),
    applicationName: multiMetadata('Base.applicationName'),
    referrer: multiMetadata('Base.referrer'),
    alternates: {
      canonical: '/',
      languages: langCanonicalUrls(locales, locale),
    },
    formatDetection: {
      email: multiMetadata('Base.formatDetection.email'),
      address: multiMetadata('Base.formatDetection.address'),
      telephone: multiMetadata('Base.formatDetection.telephone'),
    },
    openGraph: {
      title: multiMetadata('Home.openGraph.title'),
      description: multiMetadata('Home.openGraph.description'),
      locale: multiMetadata('Base.openGraph.locale'),
      alternateLocale: langMetaConvert(locales, locale),
      url: multiMetadata('Home.openGraph.url'),
      type: 'website',
      siteName: multiMetadata('Base.openGraph.siteName'),
      images: [
        {
          url: 'op-800x800.png',
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

export default function Index({ params: { locale } }: IParams) {
  unstable_setRequestLocale(locale);

  return <HomeContainer locale={locale} />;
}
