import React from 'react'
import PropTypes from 'prop-types'
import { IntlProvider, FormattedMessage } from 'react-intl'

const Jumbotron = ({ locale, i18nMessages }) => (
  <IntlProvider locale={locale} messages={i18nMessages}>
    <div class='home-banner'>
      <div class='container'>
        <div class='row'>
          <div class='jumbotron col-md-6 col-lg-7'>
            <h1>
              <FormattedMessage id='heading' />
            </h1>
            <h2>
              <FormattedMessage id='subheading' />
            </h2>
            <p class='lead'>
              <FormattedMessage id='headingDescription' />
            </p>
            <div class='btn-container'>
              <a class='btn btn-default btn-lg' href='/register'>
                <b>
                  <FormattedMessage id='signUpFree' />
                </b>{' '}
                | <FormattedMessage id='signUpQuota' />
              </a>
            </div>
          </div>
          <div class='col-md-6 col-lg-5'>
            <div class='home-banner sample-survey'>
              <h3>
                <FormattedMessage id='sampleHeading' />
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </IntlProvider>
)

Jumbotron.propTypes = {
  location: PropTypes.string.isRequired
}

export default Jumbotron
