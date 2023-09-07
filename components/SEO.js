import Head from 'next/head';

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{}</title>
      <meta name="Silver Tree Agency and Principles of Wealth presents the Client Relations Workshop!" content={description} />
      <meta property="Client Relations Workshop, Improve Client Relations Skills, Mastering Client Relationship Building, Enhance Customer Satisfaction" content={title} />
    </Head>
  );
}
