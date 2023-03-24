import Head from 'next/head';
import Script from 'next/script';

interface SEOProps {
  title: string;
  description: string;
}

const SEO = ({ title, description }: SEOProps) => {
  return (
    <>
      <Head>
        {/* Title Name */}
        <title>{title}</title>

        {/* Adding additional information about website */}
        <meta name="description" content={description} />

        {/* Adding custom favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-K7MFK4V1DK"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
        
            gtag('config', 'G-K7MFK4V1DK');
        `}
      </Script>
    </>
  );
};

export default SEO;
