import React from 'react'
import Helmet from 'react-helmet'
import { prefixLink } from 'gatsby-helpers'

const BUILD_TIME = new Date().getTime()

module.exports = React.createClass({
  displayName: 'HTML',
  propTypes: {
    body: React.PropTypes.string
  },
  render () {
    const { body } = this.props
    const { title } = Helmet.rewind()
    const font = <link href='https://fonts.googleapis.com/css?family=Roboto:400,400italic,500,700&subset=latin,cyrillic' rel='stylesheet' type='text/css' />
    let css
    if (process.env.NODE_ENV === 'production') {
      // eslint-disable-next-line import/no-webpack-loader-syntax
      css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
    }

    return (
      <html lang='en'>
        <head>
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0 maximum-scale=5.0' />
          <link rel='apple-touch-icon' sizes='57x57' href='/apple-icon-57x57.png' />
          <link rel='apple-touch-icon' sizes='60x60' href='/apple-icon-60x60.png' />
          <link rel='apple-touch-icon' sizes='72x72' href='/apple-icon-72x72.png' />
          <link rel='apple-touch-icon' sizes='76x76' href='/apple-icon-76x76.png' />
          <link rel='apple-touch-icon' sizes='114x114' href='/apple-icon-114x114.png' />
          <link rel='apple-touch-icon' sizes='120x120' href='/apple-icon-120x120.png' />
          <link rel='apple-touch-icon' sizes='144x144' href='/apple-icon-144x144.png' />
          <link rel='apple-touch-icon' sizes='152x152' href='/apple-icon-152x152.png' />
          <link rel='apple-touch-icon' sizes='180x180' href='/apple-icon-180x180.png' />
          <link rel='icon' type='image/png' sizes='192x192' href='/android-icon-192x192.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='96x96' href='/favicon-96x96.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
          <link rel='manifest' href='/manifest.json' />
          <meta name='msapplication-TileColor' content='#ffffff' />
          <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
          <meta name='theme-color' content='#ffffff' />
          { title.toComponent() }
          { font }
          { css }
          <!-- Facebook Pixel Code -->
      <script>
        !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
          document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1027164117419547'); // Insert your pixel ID here.
          fbq('track', 'PageView');
        </script>
        <noscript><img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=1027164117419547&ev=PageView&noscript=1"
          /></noscript>
<!-- DO NOT MODIFY -->
<!-- End Facebook Pixel Code -->

          <script src='//load.sumome.com/' data-sumo-site-id='1d146cec91ef61ec57b8a3bc005cb7748f559e30494c2852e1d7338bb1b1d9c8' async='async' />
        </head>
        <body>
          <div id='react-mount' dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />

        </body>
      </html>
    )
  }
})
