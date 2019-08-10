import React, { useState, useEffect } from 'react'
import useLocation from 'wouter/use-location'
import { Helmet } from 'react-helmet'

import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'

import Dragger from './components/Dragger/Dragger'
import Title from './components/Title/Title'
import SocialLinks from './components/SocialLinks/SocialLinks'
import Detail from './components/Detail/Detail'
import List from './components/List/List'

import './index.scss'

import cardData from './data.js'
import dataOpenSource from './dataOpenSource.js'

export const breakpoint = 768
export const configMain = { tension: 500, friction: 80, mass: 3 }
export const configBouncey = { mass: 5, tension: 1600, friction: 100 }

const App = () => {

  const [isExpanded, setIsExpanded] = useState(null)

  // Routing
  const [location, setLocation] = useLocation()
  const matchedLocationFromData = cardData.find(item => item.path === location)
  useEffect(() => {
    if (matchedLocationFromData) {
      disableBodyScroll()
      setIsExpanded(matchedLocationFromData.title)
    } else {
      clearAllBodyScrollLocks()
      setIsExpanded(null)
    }
  }, [matchedLocationFromData])

  return (
    <main className="container" >

      <Helmet>
        <meta content="#efefef" name="theme-color" />
      </Helmet>

      <Title />
      <SocialLinks inert={!!isExpanded} />

      <Dragger
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        setLocation={setLocation}
        inert={isExpanded}
      />

      <Detail
        active={cardData.find(x => x.title === isExpanded)}
        handleClose={() => {
          setIsExpanded(null)
          clearAllBodyScrollLocks()
          setLocation('/')

          // if (window.innerWidth < breakpoint) return
          // setHovered(title) // keep it hovered, for z-index reasons
        }}
      />

      <List
        title="Open Source"
        data={dataOpenSource}
        inert={isExpanded}
      />

    </main>
  )
}

export default App