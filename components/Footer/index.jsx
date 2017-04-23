import React from 'react'
import SiteLinks from '../SiteLinks'

const Footer = (props) => {
  return (
    <footer>
      <p>Follow me on social media</p>
      <SiteLinks {...props} />
      <p className='copyright'>
        &copy; All rights reserved.
      </p>
      <p> Powered by <a href='https://www.gatsbyjs.org/'>GatsbyJS</a>, template by <a href='https://github.com/wpioneer/gatsby-starter-lumen'>Lumen</a>, colorscheme by <a href='https://github.com/probberechts/cactus-dark'>Hexo's Cactus Dark</a>.</p>
    </footer>

  )
}

export default Footer
