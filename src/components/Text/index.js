import React, { Component } from 'react'

class Text extends Component {
  render() {

    const text = this.props.text

    return(
      <div className='formatted-content'>
        <div
          className='text'
          dangerouslySetInnerHTML={{
            __html: text
          }}
        />
      </div>
    )
  }
}

export default Text
