import React from 'react'
import PropTypes from 'prop-types'
import flatten from 'flat'
import { IntlProvider, FormattedMessage } from 'react-intl'
import styles from './features.module.scss'
import dragpAndDropImage from '../../../images/features-drag-and-drop.png'
import javascriptAPIImage from '../../../images/features-javascript-api.png'
// Content components
import MoreFeatures from './more'
import SampleSurvey from './survey'

const Features = ({ locale, i18nMessages }) => {
  return (
    <IntlProvider locale={locale} messages={flatten(i18nMessages)}>
      <div className='container features'>
        <div className={styles.indexSection}>
          <h1>
            <FormattedMessage id='features' />
          </h1>
          <div className='row'>
            <div className='col-md-6 col-lg-4'>
              <div className={styles.thumbnail}>
                <div className={styles.captionHeading}>
                  <h3>
                    <FormattedMessage id='smartScrolling.title' />
                  </h3>
                </div>
                <div className={styles.captionImage}>
                  <SampleSurvey />
                </div>
                <div className={styles.captionSmall}>
                  <h5>
                    <FormattedMessage id='smartScrolling.description' />
                  </h5>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className={styles.thumbnail}>
                <div className={styles.captionHeading}>
                  <h3>
                    <FormattedMessage id='monitor.title' />
                  </h3>
                </div>
                <div
                  className={`${styles.captionImage} ${styles.sampleMonitor}`}
                >
                  <table
                    className='table table-bordered'
                    style={{ width: '90%' }}
                  >
                    <tbody>
                      <tr>
                        <th>Question</th>
                        <th>Response</th>
                      </tr>
                      <tr ng-repeat='item in featuresDemo.monitor'>
                        <td> item.title </td>
                        <td> item.value </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className={styles.captionSmall}>
                  <h5>
                    <FormattedMessage id='monitor.description' />
                  </h5>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className={styles.thumbnail}>
                <div className={styles.captionHeading}>
                  <h3>
                    <FormattedMessage id='dragAndDrop.title' />
                  </h3>
                </div>
                <div className={styles.captionImage}>
                  <img src={dragpAndDropImage} alt='Drag and Drop' />
                </div>
                <div className={styles.captionSmall}>
                  <h5>
                    <FormattedMessage id='dragAndDrop.description' />{' '}
                  </h5>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className={styles.thumbnail}>
                <div className={styles.captionHeading}>
                  <h3>
                    <FormattedMessage id='reporting.title' />
                  </h3>
                </div>
                <div
                  className={styles.captionImage}
                  style={{ textAlign: 'center' }}
                >
                  <div className='sampleReporting' feature-reporting='true'>
                    <div id='sampleYesNo' />
                    <div id='sampleSelect' />
                  </div>
                </div>
                <div className={styles.captionSmall}>
                  <h5>
                    <FormattedMessage id='reporting.description' />
                  </h5>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className={styles.thumbnail}>
                <div className={styles.captionHeading}>
                  <h3>
                    <FormattedMessage id='javascript.title' />
                  </h3>
                </div>
                <div className={styles.captionImage}>
                  <img src={javascriptAPIImage} alt='JS embedding' />
                </div>
                <div className={styles.captionSmall}>
                  <h5>
                    <FormattedMessage id='javascript.description' />
                  </h5>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className={styles.thumbnail}>
                <div className={styles.captionHeading}>
                  <h3>
                    <FormattedMessage id='more.title' />
                  </h3>
                </div>
                <div
                  className={`${styles.captionImage} ${
                    styles.captionDescription
                  } ${styles.moreFeatures}`}
                >
                  <MoreFeatures locale={locale} i18nMessages={i18nMessages.more} />
                </div>
                <div className={styles.captionSmall}>
                  <h5>
                    <FormattedMessage id='more.description' />
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </IntlProvider>
  )
}

Features.propTypes = {
  locale: PropTypes.string.isRequired
}

export default Features
