import React, { Component } from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

class CoverImage extends Component {
  render() {
    const coverImage = this.props.image
    return(
      <Img
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          adaptiveHeight: true
        }}
        key={ coverImage.id }
        fluid={ coverImage.fluid }
      />
    )
  }
}

CoverImage.propTypes = {
  image: PropTypes.object,
}

export default CoverImage
