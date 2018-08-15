import React, { Component, Fragment } from 'react'
import { arrayOf, string } from 'prop-types'

class ErrorBox extends Component {
  static propTypes = {
    errors: arrayOf(string)
  }

  render () {
    return (
      <Fragment>
        <div style={{ position: 'fixed', left: 0 }}>
          {/* eslint-disable-next-line handle-callback-err */}
          {this.props.errors.map(error => (
            <div className='message is-danger'>
              <div className='message-body'>
                <strong>{error}</strong>
              </div>
            </div>
          ))}
        </div>
      </Fragment>
    )
  }
}

export default ErrorBox
