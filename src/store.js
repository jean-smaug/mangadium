import { types, addMiddleware } from 'mobx-state-tree'
import { connectReduxDevtools } from 'mst-middlewares'
import { List } from './models/List'
import { Detail } from './models/Detail'
import { Search } from './models/Search'
import { App } from './models/App'

const store = types
  .model({
    app: App,
    list: List,
    detail: Detail,
    search: Search
  })
  .create({
    app: App.create({ errorDuration: 7000 }),
    list: List.create(),
    detail: Detail.create(),
    search: Search.create()
  })

if (process.env.NODE_ENV !== 'production') {
  addMiddleware(store, connectReduxDevtools(require('remotedev'), store))
}

export default store
