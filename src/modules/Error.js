import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import ErrorBox from '../components/ErrorBox'

@inject('app')
@observer
class Error extends Component {
  componentDidMount () {
    this.props.app.pushError('Azaeaz')

    setTimeout(() => {
      this.props.app.pushError('la chancle')
    }, 3000)
  }

  render () {
    return (
      <div>
        <ErrorBox errors={this.props.app.errors} />
      </div>
    )
  }
}

export default Error
