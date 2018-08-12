import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { shape } from 'prop-types'

import List from './modules/List'
import Detail from './modules/Detail'
import Search from './modules/Search'
import Loader from './components/Loader'
import { AppPropTypes } from './models/App'

@inject('app')
@observer
class App extends Component {
  static propTypes = {
    app: shape(AppPropTypes)
  }

  render () {
    return (
      <div>
        {this.props.app.isLoading && <Loader />}
        <Search />
        <div style={{ marginTop: '70px' }}>
          <List />
          <Detail />
        </div>
      </div>
    )
  }
}

export default App
