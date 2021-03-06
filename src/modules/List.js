import React, { Component, Fragment } from 'react'
import { observer, inject } from 'mobx-react'
import { shape } from 'prop-types'

import Card from '../components/Card'
import { ListPropTypes } from '../models/List'
import { DetailPropTypes } from '../models/Detail'

@inject('list', 'detail')
@observer
class Manga extends Component {
  static propTypes = {
    list: shape(ListPropTypes),
    detail: shape(DetailPropTypes)
  }

  render () {
    const { list, detail } = this.props
    return (
      <Fragment>
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
      </Fragment>
    )
  }
}

export default Manga
