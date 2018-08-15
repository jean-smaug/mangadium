import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import ErrorBox from '../components/ErrorBox'
import { AppPropTypes } from '../models/App'
import styles from '../utils/styles'

@inject('app')
@observer
class Error extends Component {
  static propTypes = {
    app: AppPropTypes
  }

  componentDidMount () {
    setTimeout(() => {
      this.props.app.pushError('la chancle')
    }, 3000)
  }

  render () {
    return (
      <div style={{ position: 'fixed', left: 0, width: '20vw', zIndex: styles.zIndexMajor }}>
        <ErrorBox errors={this.props.app.errors} />
      </div>
    )
  }
}

export default Error
