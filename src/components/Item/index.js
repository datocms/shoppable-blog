import React, { Component } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import Image from '../CoverImage'

class Item extends Component {
  render() {
    const item = this.props.content
    return(
      <Link
        className='item'
        to={ `/${ item.slug }` }
      >
        <div className='item__body'>
          <div className='item__image'>
            <Image image={ item.coverImage }/>
          </div>
          <div className='item__body__inner fade-in'>
            <h2 className='item__title'>
              { item.title }
            </h2>
            <div className='item__author'>
              by { item.author.firstName } { item.author.lastName }
            </div>
            <div
              className='item__excerpt'
              dangerouslySetInnerHTML={{
                __html: item.excerpt
              }}
            />
          </div>
        </div>
      </Link>
    )
  }
}

Item.propTypes = {
  item: PropTypes.object,
}

export default Item
