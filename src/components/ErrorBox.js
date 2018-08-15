import React, { Component, Fragment } from 'react'
import { arrayOf, string } from 'prop-types'

class ErrorBox extends Component {
  static propTypes = {
    errors: arrayOf(string)
  }

  render () {
    return (
      <Fragment>
        {/* eslint-disable-next-line handle-callback-err */}
        {this.props.errors.map(error => (
          <div
            key={error}
            className='message is-danger'
            style={{ animation: 'slideFromLeft 0.5s ease', animationFillMode: 'both' }}
          >
            <div className='message-body'>
              <strong>{error}</strong>
            </div>
          </div>
        ))}
      </Fragment>
    )
  }
}

export default ErrorBox
