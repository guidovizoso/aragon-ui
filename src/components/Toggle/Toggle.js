import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Spring } from 'react-spring'
import { GU } from '../../style'
import IconDown from '../../icons/components/IconArrowDown'

function Arrow({ orientation }) {
  return (
    <Spring
      from={{ transform: 'rotateX(0deg)' }}
      to={
        orientation === 'downwards'
          ? { transform: 'rotateX(0deg)' }
          : { transform: 'rotateX(180deg)' }
      }
    >
      {props => <IconDown style={props} size="tiny" />}
    </Spring>
  )
}

Arrow.propTypes = {
  orientation: PropTypes.oneOf(['downwards', 'upwards']),
}

function Toggle({ children, ...props }) {
  const [visible, setVisible] = useState(true)
  const toggleContent = () => {
    setVisible(prevState => {
      console.log('visible:', !prevState)
      return !prevState
    })
  }
  return (
    <>
      <div
        css={`
          display: flex;
          justify-content: flex-end;
          align-items: center;
          height: ${4 * GU}px;
        `}
      >
        <button
          css={`
            display: flex;
            align-items: center;
          `}
          onClick={toggleContent}
        >
          Toggle
          <Arrow orientation={visible ? 'downwards' : 'upwards'} />
        </button>
      </div>
      <Spring
        from={{ opacity: 1, height: 'auto' }}
        to={
          visible ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }
        }
      >
        {props => <div style={props}>{children}</div>}
      </Spring>
    </>
  )
}

Toggle.propTypes = {
  children: PropTypes.node,
}

export { Toggle }
export default Toggle
