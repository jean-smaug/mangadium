import * as React from 'react'
import { observer, inject } from 'mobx-react'

import Card from '../components/Card'
// import { ListPropTypes } from '../models/List'
// import { DetailPropTypes } from '../models/Detail'

@inject('list', 'detail')
@observer
class Manga extends React.Component<{}, {}> {
  render () {
    const { list, detail } = this.props
    return (
      <React.Fragment>
        <div className='container'>
          <div className='columns is-multiline'>
            {list.mangas.map(item => (
              <div key={item.id} className='column is-one-fifth'>
                <Card
                  manga={item}
                  onClick={() => {
                    detail.setManga(item.id)
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Manga
