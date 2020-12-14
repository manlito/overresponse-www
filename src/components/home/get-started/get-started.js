import React from 'react'
import PropTypes from 'prop-types'
import { IntlProvider, FormattedMessage } from 'react-intl'
import styles from './get-started.module.scss'

const GetStarted = ({ locale, i18nMessages }) => (
  <IntlProvider locale={locale} messages={i18nMessages}>
    <div className='container'>
      <div className={styles.indexSection}>
        <h1>
          <FormattedMessage id='heading' />
        </h1>
        <div class="alert alert-warning" role="alert">
          <FormattedMessage id='warning' />
        </div>
      </div>
    </div>
  </IntlProvider >
)

GetStarted.propTypes = {
  locale: PropTypes.string.isRequired
}

export default GetStarted
