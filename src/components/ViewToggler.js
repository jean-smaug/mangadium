import React, { Component } from 'react'
import { func, bool, element } from 'prop-types'
import styles from '../utils/styles'

class ViewToggler extends Component {
  static propTypes = {
    isVisible: bool.isRequired,
    onClose: func.isRequired,
    children: element.isRequired
  }

  render () {
    const { isVisible, onClose, children } = this.props

    return (
      <div
        style={{
          background: styles.transparentBackground,
          position: 'fixed',
          top: 0,
          zIndex: styles.zIndexMajor,
          width: '100vw',
          height: '100vh',
          visibility: isVisible ? 'visible' : 'hidden'
        }}
      >
        <button
          className='button is-danger'
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: styles.zIndexMajor,
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 600ms ease'
          }}
          onClick={onClose}
        >
          X
        </button>
        <div
          style={{
            position: 'relative',
            height: '100vh',
            background: 'white',
            transform: `translateY(${isVisible ? 0 : '100vh'})`,
            transition: 'transform 600ms ease',
            overflowX: 'scroll',
            padding: '40px 50px'
          }}
        >
          {children}
        </div>
      </div>
    )
  }
}

export default ViewToggler
