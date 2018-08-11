import React, { Component } from 'react'
import { arrayOf, string } from 'prop-types'

class ImageSlider extends Component {
  static propTypes = { images: arrayOf(string) }

  state = {
    firstItem: 0,
    lastItem: 4
  }

  componentWillMount () {}

  render () {
    console.log(this.props.images.length)
    return (
      <div className='columns' style={{ overflowX: 'scroll' }}>
        {this.props.images.map(image => (
          <div key={image} className='column is-one-quarter'>
            <figure className='image is-3by5'>
              <img src={image} />
            </figure>
          </div>
        ))}
      </div>
    )
  }
}

export default ImageSlider
