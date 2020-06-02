// global.js
// Source: https://github.com/maximakymenko/react-day-night-toggle-app/blob/master/src/global.js#L23-L41

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }

  body.light-mode {
  background-color: #fff;
  color: #333;
  transition: background-color 0.3s ease;
  }
  body.dark-mode {
    background-color: #1a1919;
    color: #999;

    a,
    a:visited {
        color: white !important;
      }

    .alert {
      background: black;
      color: white;
    }

     p, h2, .footer {
       color: white;
     }
  }


  body.dark-mode



  `
