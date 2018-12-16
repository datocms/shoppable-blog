import Img from 'gatsby-image'
import React, { Component } from 'react'

class Image extends Component {
  render() {

    const image = this.props.image

    return(
      <Img
        key={ image.id }
        fluid={ image.fluid }
        className='image'
      />
    )
  }
}

export default Image
