import React from 'react'
import { useState } from 'react'
import useInterval from 'react-useinterval';
import PropTypes from 'prop-types'
import { IntlProvider, FormattedMessage } from 'react-intl'
import styles from './how-to-use.module.scss'
import surveyEditorImage from '../../../images/survey-editor.png'

const HowToUse = ({ locale, i18nMessages }) => {

  const [monitorTableState, setMonitorTableState] = useState(0)

  useInterval(() => {
    setMonitorTableState((monitorTableState + 1) % 7)
  }, 1000)

  return <IntlProvider locale={locale} messages={i18nMessages}>
    <div className='container'>
      <div className={styles.indexSection}>
        <h1>
          <FormattedMessage id='heading' />
        </h1>
      </div>
      <div className={`row align-items-center ${styles.feature}`}>
        <div className={`col-6 ${styles.featureImage}`} style={{
          backgroundImage: `url(${surveyEditorImage})`,
          minHeight: 200
        }}>
        </div>
        <div className={`col-6 ${styles.featureContent}`}>
          <h3>1. Create your survey in the visual editor</h3>
          <p>Edit and preview the survey with intuitive editor. Item types from simple yes/no, up to nested matrices of items.</p>
        </div>
      </div>
      <div className={`row align-items-center ${styles.feature}`}>
        <div className={`col-6 ${styles.featureContent}`}>
          <h3>2. Get the code snippet</h3>
          <p>Simply click the Publish button to get the code to insert the survey on your site or a direct link you can send the survey to respondants if needed.</p>
        </div>
        <div className={`col-6 ${styles.featureImage}`} >
          <pre className={styles.code}>
            <code>
              {`<script type="text/javascript">
  if(Math.random()<0.04){(function(s,u,r,v,e,y){e=window;y=document;y.write('<div id="'+u+'"/>');e[s]={surveyId:r,containerId:u};
  v=y.createElement('script');v.async=1;v.src='//static.overresponse.com/scripts/respondant/respondant.js';
  y.getElementsByTagName('head')[0].appendChild(v);})('ORSettings', 'ORClientContainer', 'TPU6iN2hvf');}
</script>`}
            </code>
          </pre>
        </div>
      </div>
      <div className={`row align-items-center ${styles.feature}`}>
        <div className={`col-6`}>
          <table className={`table table-striped table-condensed table-bordered ${styles.monitorTable} `}>
            <thead>
              <tr>
                <th style={{ width: 50 }}>ID</th>
                <th style={{ width: '30%' }}>
                  How did you hear about us?
									</th>
                <th style={{ width: '30%' }}>
                  And you are...
									</th>
                <th style={{ width: '30%' }}>
                  Will you embed surveys on your site?
									</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className={styles.withTransition} style={{
                    opacity: monitorTableState >= 1 ? 1.0 : 0
                  }}>0</div>
                </td>
                <td>
                  <div className={styles.withTransition} style={{
                    opacity: monitorTableState >= 1 ? 1.0 : 0
                  }}>A marketing professional</div>
                </td>
                <td>
                  <div className={styles.withTransition} style={{
                    opacity: monitorTableState >= 4 ? 1.0 : 0
                  }}>A marketing professional</div>
                </td>
                <td>
                  <div className={styles.withTransition} style={{
                    opacity: monitorTableState >= 5 ? 1.0 : 0
                  }}>Yes</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className={styles.withTransition} style={{
                    opacity: monitorTableState >= 1 ? 1.0 : 0
                  }}>1</div>
                </td>
                <td>
                  <div className={styles.withTransition} style={{
                    opacity: monitorTableState >= 1 ? 1.0 : 0
                  }}>I saw a survey on another site</div>
                </td>
                <td>
                  <div className={styles.withTransition} style={{
                    opacity: monitorTableState >= 3 ? 1.0 : 0
                  }}>A blogger &#47; developer</div>
                </td>
                <td>
                  <div className={styles.withTransition} style={{
                    opacity: monitorTableState >= 4 ? 1.0 : 0
                  }}>Not sure</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={`col-6 ${styles.featureContent}`}>
          <h3>3. Start collecting</h3>
          <p>Use our survey monitor to have see how users react to your survey.
            Interactive charts are available for you get actionable data.
          </p>
        </div>
      </div>
    </div>
  </IntlProvider >
}

HowToUse.propTypes = {
  locale: PropTypes.string.isRequired
}

export default HowToUse
