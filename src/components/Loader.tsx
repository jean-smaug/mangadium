import * as React from 'react'
import ReactLoader from 'react-loader-spinner'

import styles from '../utils/styles'

class Loader extends React.Component {
  render () {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          background: styles.transparentBackground,
          zIndex: styles.zIndexMedium,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <ReactLoader type='Oval' color='#FFFFFF' height={80} width={80} />
      </div>
    )
  }
}

export default Loader
