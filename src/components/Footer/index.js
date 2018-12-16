import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import React from 'react'

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        logo: file(relativePath: { eq: "datocms.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={ data =>
      <div className='footer'>
        <div className='footer__body'>
          <div className='footer__text'>
            A demo site made by <a href='https://www.datocms.com/'>DatoCMS</a>
          </div>
          <div className='footer__image'>
            <a href='https://www.datocms.com/'>
              <Img
                fluid={ data.logo.childImageSharp.fluid }
              />
            </a>
          </div>
        </div>
      </div>
    }
  />
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: '',
}

export default Footer
