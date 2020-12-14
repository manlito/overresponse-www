import React from 'react'
import PropTypes from 'prop-types'
import { IntlProvider, FormattedMessage } from 'react-intl'
import styles from './jumbotron.module.scss'

const Jumbotron = ({ locale, i18nMessages }) => (
  <IntlProvider locale={locale} messages={i18nMessages}>
    <div className={styles.homeBanner}>
      <div className='container'>
        <div className='row'>
          <div className={`${styles.jumbotron} col-md-6 col-lg-7`}>
            <h1>
              <FormattedMessage id='heading' />
            </h1>
            <h2>
              <FormattedMessage id='subheading' />
            </h2>
            <p className={styles.lead}>
              <FormattedMessage id='headingDescription' />
            </p>
          </div>
          <div className='col-md-6 col-lg-5'>
            <div className={`${styles.sampleSurvey}`}>
              <div className={styles.homeSurvey}>
                <div
                  id='homeSurveyContainer'
                  survey-demo='true'
                  survey-id='517b047386fc3fba190000e2'
                  survey-height='100%'
                  survey-auto-hide='false'
                  style={{height: '100%'}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </IntlProvider>
)

Jumbotron.propTypes = {
  locale: PropTypes.string.isRequired
}

export default Jumbotron
