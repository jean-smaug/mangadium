import React, { Component, Fragment } from 'react'
import { observer, inject } from 'mobx-react'

import { MangaDetailPropTypes } from '../models/Manga'
import ViewToggler from '../components/ViewToggler'
import { displayAuthors } from '../utils/render'

@inject('detail')
@observer
class Detail extends Component {
  static propTypes = MangaDetailPropTypes;

  render () {
    const {
      detail,
      detail: { manga }
    } = this.props

    return (
      <ViewToggler
        isVisible={detail.isOpen}
        onClose={detail.toggleVisibilityStatus}
      >
        <div className='container'>
          {manga && (
            <div>
              <h2 className='title is-2'>
                <a href={manga.url} target='_blank'>
                  {manga.title}
                </a>
              </h2>
              <p className='subtitle'>{displayAuthors(manga.authors)}</p>
              <div className='content'>
                {manga.genres.map(genre => (
                  <span className='tag is-dark' style={{ marginLeft: '3px' }}>
                    {genre}
                  </span>
                ))}
              </div>
              <div className='content'>
                <p>{manga.synopsis}</p>
              </div>
              <div className='columns' style={{ overflowX: 'scroll' }}>
                {manga.images.map(image => (
                  <div key={image} className='column is-one-quarter'>
                    <figure className='image is-3by5'>
                      <img src={image} />
                    </figure>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </ViewToggler>
    )
  }
}

export default Detail
