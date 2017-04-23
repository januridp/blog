import React from 'react'
import moment from 'moment'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import ReadNext from '../ReadNext'
import './style.css'
import '../../static/css/highlight.css'

import Footer from '../Footer'

class SitePost extends React.Component {
  render () {
    const { route } = this.props
    const post = route.page.data
    const home = (
      <div>
        <Link className='gohome' to={prefixLink('/')}>All Articles</Link>
      </div>
    )

    return (
      <div>
        {home}
        <div className='blog-single'>
          <div className='text'>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
            <div className='date-published'>
              <em>Published {moment(post.date).format('D MMM YYYY')}</em>
            </div>
          </div>
          <div className='footer'>
            <ReadNext post={post} {...this.props} />
            <hr />
            <Footer {...this.props} />
          </div>
        </div>
      </div>
    )
  }
}

SitePost.propTypes = {
  route: React.PropTypes.object.isRequired
}

export default SitePost
