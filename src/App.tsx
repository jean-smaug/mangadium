import * as React from 'react'
import { observer, inject } from 'mobx-react'

import { AppInterface } from './models/App'
import Loader from './components/Loader'

import Search from './modules/Search'
import List from './modules/List'
import Detail from './modules/Detail'

@inject('app')
@observer
class App extends React.Component<AppInterface, {}> {
  render () {
    return (
      <div>
        hello
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
