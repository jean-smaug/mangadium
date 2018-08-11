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
        <div
          style={{
            height: '95vh',
            background: 'white',
            transform: `translateY(${isVisible ? '5vh' : '95vh'})`,
            transition: 'transform 600ms ease',
            overflowX: 'scroll',
            padding: '40px 50px'
          }}
        >
          <button
            className='button'
            style={{ position: 'absolute', top: '20px', right: '20px' }}
            onClick={onClose}
          >
            X
          </button>
          {children}
        </div>
      </div>
    )
  }
}

export default ViewToggler
