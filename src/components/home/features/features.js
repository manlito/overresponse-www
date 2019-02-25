import React from 'react'
import PropTypes from 'prop-types'
import flatten from 'flat'
import { IntlProvider, FormattedMessage } from 'react-intl'
import styles from './features.module.scss'
import surveyStyles from './respondant.scss'
import dragpAndDropImage from '../../../images/features-drag-and-drop.png'
import javascriptAPIImage from '../../../images/features-javascript-api.png'

// Content components
import MoreFeatures from './more'

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
                  <div
                    className={`${
                      surveyStyles.ORSurveyContainer
                    } Desktop Expand`}
                  >
                    <div className='ORMain WithAutoScroll'>
                      <div className='ORSlimContainer'>
                        <div
                          className='ORLayoutCenter'
                          style={{ height: '95%' }}
                        >
                          <div className='ORContent'>
                            <div
                              className='ORContentItems'
                              style={{ display: 'block' }}
                            >
                              <div className='ORItemContainer ORItemId0001 Rounded5px RadioText Bottom Vertical'>
                                <div className='ORLabel'>
                                  How did you hear about us?
                                </div>
                                <div className='ORRadioText ORChoice ORGeneric'>
                                  <div className='UiItem' id='7420443bf40cc65b'>
                                    <div className='ORInput'>
                                      <div className='uiRadioChoice uiMultiOption uiGeneric uiRadio uiRadioText'>
                                        <div className='Options '>
                                          <ul>
                                            <li className='Option '>
                                              {' '}
                                              <div className='OptionContent Rounded8px'>
                                                {' '}
                                                <div className='CellCheck'>
                                                  <div className='CheckMark ORFontIcon' />
                                                </div>{' '}
                                                <div className='CellLabel'>
                                                  <div className='Legend'>
                                                    I was googling for a survey
                                                    solution
                                                  </div>
                                                </div>{' '}
                                              </div>
                                            </li>
                                            <li className='Option '>
                                              {' '}
                                              <div className='OptionContent Rounded8px'>
                                                {' '}
                                                <div className='CellCheck'>
                                                  <div className='CheckMark ORFontIcon' />
                                                </div>{' '}
                                                <div className='CellLabel'>
                                                  <div className='Legend'>
                                                    A blog / &nbsp;Podcast /
                                                    Review
                                                  </div>
                                                </div>{' '}
                                              </div>
                                            </li>
                                            <li className='Option '>
                                              {' '}
                                              <div className='OptionContent Rounded8px'>
                                                {' '}
                                                <div className='CellCheck'>
                                                  <div className='CheckMark ORFontIcon' />
                                                </div>{' '}
                                                <div className='CellLabel'>
                                                  <div className='Legend'>
                                                    I saw a survey on another
                                                    site
                                                  </div>
                                                </div>{' '}
                                              </div>
                                            </li>
                                            <li className='Option '>
                                              {' '}
                                              <div className='OptionContent Rounded8px'>
                                                {' '}
                                                <div className='CellCheck'>
                                                  <div className='CheckMark ORFontIcon' />
                                                </div>{' '}
                                                <div className='CellLabel'>
                                                  <div className='Legend'>
                                                    Some other
                                                  </div>
                                                </div>{' '}
                                              </div>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div style={{ clear: 'both' }} />
                                  </div>
                                </div>
                                <div className='ORClearFloat' />
                              </div>
                              <div className='ORItemContainer ORItemId0002 Rounded5px RadioText Bottom Vertical'>
                                <div className='ORLabel'>And you are...</div>
                                <div className='ORRadioText ORChoice ORGeneric'>
                                  <div className='UiItem' id='bf07b83ae6ceebea'>
                                    <div className='ORInput'>
                                      <div className='uiRadioChoice uiMultiOption uiGeneric uiRadio uiRadioText'>
                                        <div className='Options '>
                                          <ul>
                                            <li className='Option '>
                                              {' '}
                                              <div className='OptionContent Rounded8px'>
                                                {' '}
                                                <div className='CellCheck'>
                                                  <div className='CheckMark ORFontIcon' />
                                                </div>{' '}
                                                <div className='CellLabel'>
                                                  <div className='Legend'>
                                                    A marketing professional
                                                  </div>
                                                </div>{' '}
                                              </div>
                                            </li>
                                            <li className='Option '>
                                              {' '}
                                              <div className='OptionContent Rounded8px'>
                                                {' '}
                                                <div className='CellCheck'>
                                                  <div className='CheckMark ORFontIcon' />
                                                </div>{' '}
                                                <div className='CellLabel'>
                                                  <div className='Legend'>
                                                    A blogger / &nbsp;website
                                                    administrator
                                                  </div>
                                                </div>{' '}
                                              </div>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div style={{ clear: 'both' }} />
                                  </div>
                                </div>
                                <div className='ORClearFloat' />
                              </div>
                              <div className='ORItemContainer ORItemId0003 Rounded5px RadioText Bottom Horizontal'>
                                <div className='ORLabel'>
                                  Will you embed surveys on your site?
                                </div>
                                <div className='ORRadioText ORChoice ORGeneric'>
                                  <div className='UiItem' id='16a4aaceaded9efa'>
                                    <div className='ORInput'>
                                      <div className='uiRadioChoice uiMultiOption uiGeneric uiRadio uiRadioText'>
                                        <div className='Options '>
                                          <ul>
                                            <li className='Option '>
                                              {' '}
                                              <div className='OptionContent Rounded8px'>
                                                {' '}
                                                <div className='CellCheck'>
                                                  <div className='CheckMark ORFontIcon' />
                                                </div>{' '}
                                                <div className='CellLabel'>
                                                  <div className='Legend'>
                                                    Not sure
                                                  </div>
                                                </div>{' '}
                                              </div>
                                            </li>
                                            <li className='Option '>
                                              {' '}
                                              <div className='OptionContent Rounded8px'>
                                                {' '}
                                                <div className='CellCheck'>
                                                  <div className='CheckMark ORFontIcon' />
                                                </div>{' '}
                                                <div className='CellLabel'>
                                                  <div className='Legend'>
                                                    <div className='Icon OptionNo' />
                                                    No
                                                  </div>
                                                </div>{' '}
                                              </div>
                                            </li>
                                            <li className='Option '>
                                              {' '}
                                              <div className='OptionContent Rounded8px'>
                                                {' '}
                                                <div className='CellCheck'>
                                                  <div className='CheckMark ORFontIcon' />
                                                </div>{' '}
                                                <div className='CellLabel'>
                                                  <div className='Legend'>
                                                    <div className='Icon OptionYes' />
                                                    Yes
                                                  </div>
                                                </div>{' '}
                                              </div>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div style={{ clear: 'both' }} />
                                  </div>
                                </div>
                                <div className='ORClearFloat' />
                              </div>
                              <div className='OREndSpacer' />
                            </div>
                          </div>
                          <div className='ORFooter'>OverResponse 2013</div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                  <MoreFeatures />
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
