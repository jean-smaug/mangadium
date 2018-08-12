import React, { Component } from 'react'
import { func, shape } from 'prop-types'
import TextEllipsis from 'react-text-ellipsis'

import { MangaPropTypes } from '../models/Manga'
import starIcon from '../images/star.png'

class Card extends Component {
  static propTypes = { manga: shape(MangaPropTypes), onClick: func }

  render () {
    const {
      manga: { score, imageUrl, title, publicationStartDate },
      onClick
    } = this.props

    return (
      <div className='card' onClick={onClick}>
        <div className='card-image' style={{ position: 'relative' }}>
          <figure className='image is-4by3'>
            <img src={imageUrl} alt={imageUrl} />
          </figure>
        </div>
        <div className='card-content'>
          <div className='content '>
            <TextEllipsis
              lines={2}
              tag={'p'}
              ellipsisChars={'...'}
              tagClass={'title is-4'}
              style={{ height: '2.4em', lineHeight: '1.2em' }}
            >
              {title}
            </TextEllipsis>
            <div style={{ display: 'flex' }}>
              <time style={{ fontStyle: 'italic' }} dateTime={publicationStartDate}>
                {publicationStartDate}
              </time>
              <div style={{ marginLeft: 'auto' }}>
                {score}{' '}
                <img
                  style={{
                    verticalAlign: 'text-bottom',
                    width: '20px',
                    height: '20px'
                  }}
                  src={starIcon}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card
