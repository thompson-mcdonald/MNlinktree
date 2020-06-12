// global.js
// Source: https://github.com/maximakymenko/react-day-night-toggle-app/blob/master/src/global.js#L23-L41

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

html {
  scroll-behavior: smooth;
}


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


  .headroom {
  will-change: transform;
  transition: all 0.5s ease-in-out 0s !important;
}
.headroom--pinned {
  transform: translateY(0%);
}
.headroom--unpinned {
  transform: translateY(-100%);
}

.headroom {
  background: #000;
    width: 100%;
    position: fixed !important;
    z-index: 10;
    top: 0;
    left: 0;
    padding-top: 1rem;
}



  `
