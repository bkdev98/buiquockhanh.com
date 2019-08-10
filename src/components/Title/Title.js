import React, { useRef } from 'react'
import { useTrail, useChain, useSpring, animated } from 'react-spring'

import { breakpoint } from '../../App'

import './Title.scss'

const items = ['Quoc', 'Khanh']
const config = { mass: 5, tension: 4000, friction: 200 }

const Title = () => {

  const isLarge = window.innerWidth > breakpoint

  const springRef = useRef()
  const trailRef = useRef()

  const { opacity } = useSpring({
    ref: springRef,
    opacity: 1,
    from: { opacity: 0 },
  })

  const trail = useTrail(items.length, {
    ref: trailRef,
    x: 0,
    from: { x: 40 },
    config,
  })

  useChain([trailRef, springRef], [0.25, isLarge ? 1 : 0.4])

  return (
    <header className="title">
      <div className="name">

        {trail.map(({ x }, index) => (
          <div
            key={items[index]}
            className="name-split"
          >
            <animated.div style={{ transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>{items[index]}</animated.div>
          </div>
        ))}

      </div>

      <animated.h1
        className="intro"
        style={{
          opacity
        }}
      >
        I love dogs and make softwares.
        I use JavaScript for most of my projects. I have experience in React, React Native, GraphQL, Gatsby, Express, Electron,...
      </animated.h1>

    </header>
  )
}

export default Title
