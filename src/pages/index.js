import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Item from '../components/Item'

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query IndexPage {
        posts: allDatoCmsPost {
          edges {
            node {
              id
              title
              excerpt
              slug
              coverImage{
                id
                fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress", fit: "facearea", faceindex: 1, facepad: 8 }) {
                  ...GatsbyDatoCmsFluid
                }
              }
              author {
                id
                firstName
                lastName
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <div className='wrap'>
          <div className='grid'>
            {
              data.posts.edges.map(post =>
                <div
                  key={ post.node.id }
                  className='grid__item width-12-12 tab-6-12 lap-6-12'
                >
                  <Item content={ post.node }/>
                </div>
              )
            }
          </div>
        </div>
      </Layout>
    )}
  />
)

export default IndexPage
