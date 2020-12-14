import React from 'react'
import GetStarted from './get-started'

import messages from '../../../locales/en/get-started'
import 'intl/locale-data/jsonp/en'

export default props => (
  <GetStarted {...props} locale='en' i18nMessages={messages} />
)
