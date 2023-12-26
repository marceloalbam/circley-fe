import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@200;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
            rel="stylesheet"
          />
          {/* Start of Zendesk Chat Script */}
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
              window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=
              d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
              _.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute("charset","utf-8");
              $.src="https://v2.zopim.com/?4l4PINLlBcWKfXhDcH76YTGdzRMjsmfJ";z.t=+new Date;$.
              type="text/javascript";e.parentNode.insertBefore($,e)})(document,"script");
            `,
            }}
          />
          {/* End of Zendesk Chat Script */}
        </Head>
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
