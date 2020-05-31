import React from 'react'
import BaseApp, {Container} from 'next/app'
import client from '../client'
// import 'normalize.css'
import '../styles/shared.module.css'
import '../styles/layout.css'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../components/theme.js';
import { GlobalStyles } from '../components/global.js';
import styled from 'styled-components'

const Background = styled.div`
  background: ${({ theme }) => theme.body};
`

const siteConfigQuery = `
  *[_id == "global-config"] {
    ...,
    logo {asset->{extension, url}},
    mainNavigation[] -> {
      ...,
      "title": page->title
    },
    footerNavigation[] -> {
      ...,
      "title": page->title
    }
  }[0]
  `

class App extends BaseApp {
  static async getInitialProps ({Component, ctx}) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    // Add site config from sanity
    return client.fetch(siteConfigQuery).then(config => {
      if (!config) {
        return {pageProps}
      }
      if (config && pageProps) {
        pageProps.config = config
      }

      return {pageProps}
    })
  }

  render () {
    const {Component, pageProps} = this.props
    return (
     <ThemeProvider theme={darkTheme}>
       <GlobalStyles />
     <Background>
      <Container>
        <Component {...pageProps} />
      </Container>
      </Background>
      </ThemeProvider>
    )
  }
}

export default App
