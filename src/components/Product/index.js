import React, { Component } from 'react'

class Product extends Component {
  render() {

    const product = this.props.product

    return(
      <div className='product'>
        <h1>{ product }</h1>
      </div>
    )
  }
}

export default Product
