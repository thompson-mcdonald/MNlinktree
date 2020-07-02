import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Bubble = styled.div`
  border-radius: 17px;
  padding: 2px 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  margin-bottom: 16px;
  transition: all .4s ease;
  p {
    margin: 0;
    padding: 0;
  }

  svg {
    height: 18px;
    width: 18px;
    margin-right: 12px;
    g {
      fill: white;
    }
  }
`

function BubbleText (props) {
  const {} = props
  return (
    <Bubble className='bubble'>
    <svg width="100px" height="100px" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>info</title>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="info" fill="#000000" fill-rule="nonzero">
                <path d="M50,0 C22.3857625,0 0,22.3857625 0,50 C0,77.6142375 22.3857625,100 50,100 C77.6142375,100 100,77.6142375 100,50 C100,36.7391755 94.732158,24.0214799 85.3553391,14.6446609 C75.9785201,5.26784202 63.2608245,0 50,0 Z M50.62,75.53 C51.0571637,75.7646748 51.5828363,75.7646748 52.02,75.53 C52.8838392,74.9026847 53.6694341,74.174163 54.36,73.36 C55.36,72.17 56.24,70.88 57.23,69.54 L58.62,70.38 C56.62,73.72 54.56,76.82 51.5,79.14 C49.892551,80.4199261 47.9603266,81.226751 45.92,81.47 C41.15,82.01 38.1,78.76 39.24,74.08 C40.24,69.97 41.51,65.92 42.67,61.84 C43.83,57.76 45,53.52 46.18,49.38 C46.2750711,48.9713057 46.3452006,48.5572081 46.39,48.14 C46.5733269,47.4334577 46.4320658,46.6819676 46.0046935,46.0902214 C45.5773212,45.4984751 44.9083518,45.1281076 44.18,45.08 C43.4551878,45.0159394 42.727558,44.9892374 42,45 C42.0124238,44.7602081 42.0492814,44.5223096 42.11,44.29 L42.25,43.29 L59.49,40.53 L58.29,44.71 L58.29,44.71 L58.02,45.71 C55.52,54.4433333 53.01,63.2066667 50.49,72 C50.2328576,72.688558 50.0680903,73.4081543 50,74.14 C49.9989632,74.6705535 50.2245471,75.176298 50.62,75.53 L50.62,75.53 Z M54.76,31 C53.1068492,30.9894458 51.5259082,30.3212137 50.3663494,29.1428918 C49.2067906,27.96457 48.5640192,26.3731073 48.58,24.72 C48.58,21.2903117 51.3603117,18.51 54.79,18.51 C58.2196883,18.51 61,21.2903117 61,24.72 C60.9946232,28.1705387 58.2104339,30.9725754 54.76,31 Z" id="Shape"></path>
            </g>
        </g>
    </svg>

    <strong><p>Please put https://supportpeople.online in your bio or in a Swipe Up story if you have over 10k followers</p></strong>
    </Bubble>
  )
}

BubbleText.propTypes = {
  // children: PropTypes.arrayOf(PropTypes.node),
  // childPage: string
}

export default BubbleText
