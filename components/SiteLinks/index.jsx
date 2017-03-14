import React from 'react'
import { config } from 'config'
import './style.css'
import '../../static/fonts/fontawesome/style.css'

class SiteLinks extends React.Component {
  render () {
    return (
      <div className='blog-links'>
        <ul>
          {config.siteFacebookUrl && (
            <li>
              <a target='_blank' href={config.siteFacebookUrl}>
                <i className='fa fa-facebook' />
              </a>
            </li>
          )}
          {config.siteLinkedinUrl && (
            <li>
              <a target='_blank' href={config.siteLinkedinUrl}>
                <i className='fa fa-linkedin' />
              </a>
            </li>
          )}
          {config.siteTwitterUrl && (
            <li>
              <a target='_blank' href={config.siteTwitterUrl}>
                <i className='fa fa-twitter' />
              </a>
            </li>
          )}
          {config.siteGithubUrl && (
            <li>
              <a target='_blank' href={config.siteGithubUrl}>
                <i className='fa fa-github-alt' />
              </a>
            </li>
          )}
          {config.siteVkUrl && (
            <li>
              <a target='_blank' href={config.siteVkUrl}><i className='fa fa-vk' /></a>
            </li>
          )}
          {config.siteEmailUrl && (
            <li>
              <a href={`mailto:${config.siteEmailUrl}`}>
                <i className='fa fa-envelope-o' />
              </a>
            </li>
          )}
          {config.siteTelegramUrl && (
            <li>
              <a target='_blank' href={config.siteTelegramUrl}>
                <i className='fa fa-paper-plane' />
              </a>
            </li>
          )}
          {config.siteMediumUrl && (
            <li>
              <a target='_blank' href={config.siteMediumUrl}>
                <i className='fa fa-medium' />
              </a>
            </li>
          )}
          {config.siteRssUrl && (
            <li>
              <a href={config.siteRssUrl}><i className='fa fa-rss' /></a>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default SiteLinks
