import * as React from 'react'
import { observer, inject } from 'mobx-react'

// import List from './modules/List.tsx'
// import Detail from './modules/Detail.tsx'
import Search from './modules/Search'
import Loader from './components/Loader'
import { AppInterface } from './models/App'

@inject('app')
@observer
class App extends React.Component<AppInterface, {}> {
  render () {
    return (
      <div>
        hello
        {this.props.app.isLoading && <Loader />}
        <Search />
        {/* <div style={{ marginTop: '70px' }}>
          <List />
          <Detail />
        </div> */}
      </div>
    )
  }
}

export default App
