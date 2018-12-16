import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { Link } from 'gatsby'
import React, { Component } from 'react'

import CoverImage from '../../components/CoverImage'
import Image from '../../components/Image'
import Layout from '../../components/Layout'
import Product from '../../components/Product'
import Text from '../../components/Text'

class Post extends Component {
  render() {

    const post = this.props.data.post

    return(
      <Layout>
        <div className='post'>
          <div className='post__cover-image'>
            <CoverImage image={ post.coverImage } />
            <div className='post__overlay' />
            <h1 className='post__title'>
              { post.title }
            </h1>
            <div className='post__author'>
              by { post.author.firstName } { post.author.lastName }
            </div>
          </div>
          <div className='wrap'>
            <div className='post__content'>
              {
                post.content.map(block =>
                  <div key={ block.id }>
                    {
                      block.model.apiKey === 'text' &&
                        <Text text={ block.text } />
                    }
                    {
                      block.model.apiKey === 'image' &&
                        <Image image={ block.photo } />
                    }
                    {
                      block.model.apiKey === 'product' &&
                        <Product product={ block.name } />
                    }
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Post

export const query = graphql`
  query Post($slug: String!){
    post: datoCmsPost(slug: { eq: $slug }) {
      id
      title
      author {
        firstName
        lastName
      }
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      coverImage {
        id
        fluid(maxWidth: 1920, imgixParams: { fm: "jpg", auto: "compress", fit: "facearea", faceindex: 1, facepad: 3 }) {
          ...GatsbyDatoCmsFluid
        }
      }
      content {
        ... on DatoCmsText {
          id
          model { apiKey }
          text
        }
        ... on DatoCmsImage {
          id
          model { apiKey }
          photo {
            id
            fluid(maxWidth: 1000, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
        ... on DatoCmsProduct {
          id
          model { apiKey }
          name
        }
      }
    }
  }
`
