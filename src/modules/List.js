import React, { Component, Fragment } from 'react'
import { observer, inject, PropTypes } from 'mobx-react'

import Card from '../components/Card'
import { ListPropTypes } from '../models/List'
import { DetailPropTypes } from '../models/Detail'

@inject('list', 'detail')
@observer
class Manga extends Component {
  static propTypes = PropTypes.observableObject({
    list: ListPropTypes,
    detail: DetailPropTypes
  })

  render () {
    const { list, detail } = this.props
    return (
      <Fragment>
        <div className='container'>
          <div className='columns is-multiline'>
            {list.mangas.map(manga => (
              <div key={manga.id} className='column is-one-fifth'>
                <Card
                  manga={manga}
                  onClick={() => {
                    detail.setManga(manga.id)
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Manga
