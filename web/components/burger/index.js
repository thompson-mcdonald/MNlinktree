import React from 'react'
import styled from 'styled-components'
import { slide as Menu } from 'react-burger-menu'

var styles = {
  bmBurgerButton: {
    width: '20px',
    height: '15px',
    padding: '5px'
  },
  bmBurgerBars: {
    // background: 'black'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
    // top: '8%',
    // right: '10%'
  },
  bmCross: {
    // background: 'black'
  },
  bmMenu: {
    // padding: '.5em .5em 0',
    // fontSize: '1.15em',
    // 'z-index': '4 !important'
  },
  bmMenuWrap: {
    // transition: 'all 0.333s'
    // position: 'fixed'
  },
  bmMorphShape: {
    // fill: 'black'
  },
  bmItemList: {
    // color: 'black',
    padding: '0.8em',
    'WebkitTapHighlightColor': 'rgba(0, 0, 0, 0)'
  },
  bmOverlay: {
    // // background: 'rgba(0, 0, 0, 0.5)',
    // left: '0'
  }
}

const BurgerMenuComp = styled.div`
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;


    /* Position and sizing of burger button */
  .bm-burger-button {
    width: 36px;
    height: 100%;
    width: 20px;
    height: 15px;
    padding: 5px;
    span {
      position: relative;
    }
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: ${({ theme }) => theme.text} !important;
    position: relative;
    height: 2px;
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: blue !important;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
  }

  /*
  Sidebar wrapper styles
  Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
  */
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
    top: 0;
  }

  /* General sidebar styles */
  .bm-menu {
    background: ${({ theme }) => theme.body} !important;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: ${({ theme }) => theme.text} !important;
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
  }

  /* Styling of overlay */
  .bm-overlay {
    //background: rgba(0, 0, 0, 0.3);
    background: none;
  }

  .bm-item-list a {
    padding: 1.5rem 0 0 0;
    color: ${({ theme }) => theme.text} !important;
    letter-spacing: -0.03px;
    line-height: 32px;
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
    text-decoration: none;
    position: relative;
    &:focus {
      outline: none;
    }
  }

  .bm-menu-wrap + div {
    width: 100%;
    position: fixed;
    height: 100%;
  }

  @media (max-width: 736px) {
    opacity: 1;
    transition: all 1s ease-in-out;

    &:hover {
      cursor: pointer;
    }
  }
`

export default class BurgerComp extends React.Component {
  constructor (props) {
   super(props)
   this.state = {
     menuOpen: false
   }
 }
 // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})
  }
  showSettings (event) {
    event.preventDefault();
  }
  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu () {
    this.setState({menuOpen: false})
  }
  render () {
    return (
      <BurgerMenuComp>
        <Menu
              styles={styles}
              right
              pageWrapId={ "page-wrap" }
              outerContainerId={ "outer-container" }
              isOpen={this.state.menuOpen}
              onStateChange={(state) => this.handleStateChange(state)}
              >
               <a id="home" className="menu-item" href="/">Home</a>
               <a id="about" className="menu-item" href="/about">About</a>
               <a id="contact" className="menu-item" href="/contact">Contact</a>


        </Menu>
      </BurgerMenuComp>
    )
  }
}
