import React from "react"
import Document, {Html, Head, Main, NextScript} from "next/document"
import client from "../client"
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return client.fetch('*[_id == "global-config"] {lang}.lang[0]').then(lang => {
      return {...initialProps, lang}
    })

    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }


  render () {
    return (

      <Html lang={this.props.lang || "en"}>
        <Head>
          <meta name="title" content="BLACK LIVES MATTER" />
          <meta name="description" content="Support those on the ground, online" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://supportpeople.online/" />
          <meta property="og:title" content="BLACK LIVES MATTER" />
          <meta property="og:description" content="Support those on the ground, online" />
          <meta property="og:image" content="https://supportpeople.s3.eu-west-2.amazonaws.com/summary_large_image.png" />

          <meta property="twitter:card" content="/summary_large_image.png" />
          <meta property="twitter:url" content="https://supportpeople.online/" />
          <meta property="twitter:title" content="BLACK LIVES MATTER" />
          <meta property="twitter:description" content="Support those on the ground, online" />
          <meta property="twitter:image" content="https://supportpeople.s3.eu-west-2.amazonaws.com/summary_large_image.png" />
        </Head>
        <body>
          <script src="/noflash.js"></script>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
