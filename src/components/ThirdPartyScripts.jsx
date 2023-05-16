import Head from 'next/head';
import { Partytown } from '@builder.io/partytown/react';

export default function ThirdPartyScripts() {
  const PartytownInit = () => <Partytown debug={true} forward={['dataLayer.push']} />;

  const GTMFallback = () => (
    <noscript>
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MMTJL27"
        height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
    </noscript>
  );

  return (
    <>
      <GTMFallback />
      <Head>
        <script
          type='text/javascript'
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MMTJL27');` }}
        />
      </Head>
    </>
  )
}
