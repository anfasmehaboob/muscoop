import { Html, Head, Main, NextScript } from "next/document";
import { Google_map_key } from "../base-config/base";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />

        <script src="/js/map.js"></script>
        <script
          async
          src={`https://maps.googleapis.com/maps/api/js?key=${Google_map_key}&libraries=places&callback=initAutoComplete`}
        ></script>
      </body>
    </Html>
  );
}
