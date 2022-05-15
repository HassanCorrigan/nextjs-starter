import Head from 'next/head';
import { useRouter } from 'next/router';

interface MetaProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  image?: string;
  type?: string;
}

const Meta = ({
  title,
  description,
  keywords,
  url,
  image,
  type,
}: MetaProps) => {
  const { asPath } = useRouter();
  const pathname = asPath.split('?')[0];

  return (
    <Head>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0, viewport-fit=cover maximum-scale=1'
      />
      <meta name='title' content={title} />
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />

      <meta property='og:type' content={type} />
      <meta property='og:url' content={`${url}${pathname}`} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />

      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content={`${url}${pathname}`} />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={description} />
      <meta property='twitter:image' content={image} />

      <meta name='apple-mobile-web-app-cabable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='default' />
      <meta name='theme-color' content='#ffffff' />
      <link rel='apple-touch-icon' href='/images/icons/icon-192x192.png' />
      <link
        rel='shortcut icon'
        type='image/png'
        href='/images/icons/favicon.png'
      />

      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Page Title',
  description: 'Page Title - A brief description of the page.',
  keywords: 'keyword, list',
  url: 'http://localhost:3000/',
  image: 'http://localhost:3000/images/opengraph-twitter-card.jpg',
  type: 'website',
};

export default Meta;
