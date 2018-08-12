import * as React from 'react'
import { observer, inject } from 'mobx-react'

import ViewToggler from '../components/ViewToggler'
import ImageSlider from '../components/ImageSlider'
import { displayAuthors, convertSpecialCharsToText } from '../utils/render'

import { DetailInterface } from '../models/Detail'

interface Props {
  detail: DetailInterface
}
@inject('detail')
@observer
class Detail extends React.Component<Props> {
  render () {
    const {
      detail,
      detail: { manga }
    } = this.props

    return (
      <ViewToggler isVisible={detail.isOpen} onClose={detail.toggleVisibilityStatus}>
        <div className='container'>
          {manga && (
            <div>
              <div style={{ display: 'flex' }}>
                <h2 className='title is-2'>
                  <a href={manga.url} target='_blank'>
                    {manga.title}
                  </a>
                </h2>
              </div>
              <p className='subtitle'>{displayAuthors(manga.authors)}</p>
              <div className='content'>
                {manga.genres.map(genre => (
                  <span key={genre} className='tag is-dark' style={{ marginLeft: '3px' }}>
                    {genre}
                  </span>
                ))}
              </div>
              <div className='content'>
                <p>{convertSpecialCharsToText(manga.synopsis)}</p>
              </div>
              <ImageSlider images={manga.images} />
            </div>
          )}
        </div>
      </ViewToggler>
    )
  }
}

export default Detail
