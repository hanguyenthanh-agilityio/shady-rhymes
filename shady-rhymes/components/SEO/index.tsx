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
        strategy="worker"
        src="https://www.googletagmanager.com/gtag/js?id=G-K7MFK4V1DK"
      />

      {/* <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
        
            gtag('config', 'G-K7MFK4V1DK');
        `}
      </Script> */}

      <script
        type="text/partytown"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            window.gtag = function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-K7MFK4V1DK', { 
                page_path: window.location.pathname,
            });
        `
        }}
      />
    </>
  );
};

export default SEO;
