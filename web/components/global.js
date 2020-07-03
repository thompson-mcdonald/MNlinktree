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

  body::selection {
    background-color: blue;
    color: white;
  }

  .bubble {
    background: white;
    color: black;
    border: 1px solid #474747;
    svg {
      g {
        fill: #474747;
      }
    }
  }

  .yemen .button {
    background: #F9C701 !important;
    color: black !important;
    &:hover {
      background: #F9C701 !important;
      opacity: 1;
      border-color: #FAC800;
    }

  }

  .blacklivesmatter .button {
    background: #ce4b49 !important;
    border: 1px solid #ce4b49;
    color: black;
    opacity: 1;
  }

  .cause.blm {
    &:after {
      background: #ce4b49;
    }

  }

  .cause.yemen {
    &:after {
      background: #F9C701;
    }
  }

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

     .bubble {
       background: #474747;
       border: 1px solid #474747;
       // &:hover {
       //     background: #61a54b;
       // }
       svg {
         g {
           fill: white;
         }
       }
     }

     .yemen .button {
       background: #F9C701 !important;
       color: black !important;
       &:hover {
         background: #F9C701 !important;
         opacity: 1;
         border-color: #FAC800;
       }
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
