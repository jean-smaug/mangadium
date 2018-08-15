import React, { Component } from 'react'
import { arrayOf, string } from 'prop-types'
// import { throttle } from 'throttle-debounce'

import Arrow from './Arrow'
class ImageSlider extends Component {
  static propTypes = { images: arrayOf(string) }

  constructor (props) {
    super(props)
    this.scrollWiew = React.createRef()

    this.state = {
      shouldDisplayLeftArrow: false,
      shouldDisplayRightArrow: true
    }
  }

  // componentDidMount () {
  //   this.scrollWiew.current.addEventListener(
  //     'scroll',
  //     throttle(300, e => {
  //       console.log(e.target.scrollLeft)
  //     })
  //   )
  // }

  scroll = direction => {
    const scrollView = this.scrollWiew.current
    const scrollViewPosition = scrollView.scrollLeft
    const elementWidth = scrollView.children[0].clientWidth
    const numberOfElements = this.props.images.length
    let newPosition = 0

    switch (direction) {
      case 'right':
        newPosition = scrollViewPosition + elementWidth * 1
        scrollView.scrollLeft += newPosition
        this.setState({
          shouldDisplayLeftArrow: newPosition !== 0,
          shouldDisplayRightArrow: newPosition !== (numberOfElements - 4) * elementWidth
        })
        break
      case 'left':
        newPosition = scrollViewPosition - elementWidth * 1
        scrollView.scrollLeft = newPosition
        this.setState({
          shouldDisplayLeftArrow: newPosition !== 0,
          shouldDisplayRightArrow: true
        })
        break
    }
  }

  render () {
    const { shouldDisplayLeftArrow, shouldDisplayRightArrow } = this.state
    const { images } = this.props
    return (
      <div style={{ position: 'relative' }}>
        {shouldDisplayLeftArrow && (
          <Arrow
            direction='left'
            clickHandler={() => {
              this.scroll('left')
            }}
            style={{ left: 0, transform: 'translateX(-90%)' }}
          />
        )}
        {images &&
          images.length > 4 &&
          shouldDisplayRightArrow && (
          <Arrow
            direction='right'
            clickHandler={() => {
              this.scroll('right')
            }}
            style={{ right: 0, transform: 'translateX(90%)' }}
          />
        )}

        <div
          ref={this.scrollWiew}
          className='columns'
          style={{ overflowX: 'scroll', scrollBehavior: 'smooth' }}
        >
          {images.map(image => (
            <div key={image} className='column is-one-quarter'>
              <figure className='image is-3by5'>
                <img src={image} />
              </figure>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default ImageSlider
