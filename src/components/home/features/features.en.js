import React from 'react'
import Features from './features'

import messages from '../../../locales/en/features'
import 'intl/locale-data/jsonp/en'

export default props => (
  <Features {...props} locale='en' i18nMessages={messages} />
)
