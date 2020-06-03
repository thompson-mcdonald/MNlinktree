import React from 'react'
import Document, {Html, Head, Main, NextScript} from 'next/document'
import client from '../client'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return client.fetch('*[_id == 'global-config'] {lang}.lang[0]').then(lang => {
      return {...initialProps, lang}
    })
  }

  render () {
    return (

      <Html lang={this.props.lang || 'en'}>
        <Head>
          <title>SUPPORTPEOPLE.ONLINE - BLACK LIVES MATTER</title>
          <meta name="title" content="BLACK LIVES MATTER"></meta>
          <meta name="description" content="Support those on the ground, online"></meta>

          <meta property="og:type" content="website"></meta>
          <meta property="og:url" content="https://supportpeople.online/"></meta>
          <meta property="og:title" content="BLACK LIVES MATTER"></meta>
          <meta property="og:description" content="Support those on the ground, online"></meta>
          <meta property="og:image" content="summary_large_image.png"></meta>

          <meta property="twitter:card" content="summary_large_image.png"></meta>
          <meta property="twitter:url" content="https://supportpeople.online/"></meta>
          <meta property="twitter:title" content="BLACK LIVES MATTER"></meta>
          <meta property="twitter:description" content="Support those on the ground, online"></meta>
          <meta property="twitter:image" content="summary_large_image.png"></meta>
        </Head>

        <body>
          <script src='noflash.js' />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
