import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
}

const SEO = ({ title, description }: SEOProps) => {
  return (
    <Head>
      {/* Title Name */}
      <title>{title}</title>

      {/* Adding additional information about website */}
      <meta name="description" content={description} />

      {/* Adding custom favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;
