import React, { useState }  from 'react'
import { PageTransition } from 'next-page-transitions'
import BaseApp, {Container} from 'next/app'
import client from '../client'
// import 'normalize.css'
import '../styles/shared.module.css'
import '../styles/layout.css'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../components/theme.js';
import { GlobalStyles } from '../components/global.js';
import styled from 'styled-components'
import DarkModeToggle from '../components/toggle/toggleMode';


const Background = styled.div`


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
  static async getInitialProps ({Component, router, ctx}) {
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
     <ThemeProvider theme={lightTheme}>
       <GlobalStyles />
     <Background>
      <Container>
      <DarkModeToggle />
      <PageTransition timeout={500} classNames="page-transition">
        <Component {...pageProps} />
      </PageTransition>
     <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
            transform: translateX(0);
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 1000ms;
          }
          .page-transition-exit {
            opacity: 1;
            transform: translateX(-100%);
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 3000ms;
          }
        `}</style>
      </Container>
      </Background>
      </ThemeProvider>
    )
  }
}

export default App
