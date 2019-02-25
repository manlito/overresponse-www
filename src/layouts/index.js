import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'
import { StaticQuery, graphql } from 'gatsby'
import { IntlProvider } from 'react-intl'
import 'intl'
import '../styles/index.scss'

const Layout = ({ children, locale, i18nMessages }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            languages {
              defaultLangKey
              langs
            }
          }
        }
      }
    `}
    render={data => (
      <IntlProvider locale={locale} messages={i18nMessages}>
        <div>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            style={{
              margin: `0 auto`,
              paddingTop: 0
            }}
          >
            {children}
            <Footer siteTitle={data.site.siteMetadata.title} />
          </div>
        </div>
      </IntlProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
