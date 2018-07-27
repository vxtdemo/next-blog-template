import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import 'styles/global-styles';

export default class SiteDocument extends Document {
  render () (
    <html>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="/_next/static/style.css" />
      </Head>
      <body>
        <div className="root">
          {main}
        </div>
        <NextScript />
      </body>
    </html>
  )
}
