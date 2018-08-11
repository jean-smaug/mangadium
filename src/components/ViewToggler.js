import React, { Component } from 'react'

import style from '../utils/style'

class ViewToggler extends Component {
  render () {
    return (
      <div
        style={{
          background: style.transparentBackground,
          position: 'fixed',
          top: 0,
          zIndex: style.zIndexMajor,
          width: '100vw',
          height: '100vh',
          visibility: this.props.isVisible ? 'visible' : 'hidden'
        }}
      >
        <div
          style={{
            height: '95vh',
            background: 'white',
            transform: `translateY(${this.props.isVisible ? '5vh' : '95vh'})`,
            transition: 'transform 600ms ease',
            overflowX: 'scroll',
            padding: '40px 50px'
          }}
        >
          <button
            className='button'
            style={{ position: 'absolute', top: '20px', right: '20px' }}
            onClick={this.props.onClose}
          >
            X
          </button>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default ViewToggler
