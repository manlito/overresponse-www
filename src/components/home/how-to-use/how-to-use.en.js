import React from 'react'
import HowToUse from './how-to-use'

import messages from '../../../locales/en/how-to-use'
import 'intl/locale-data/jsonp/en'

export default props => (
  <HowToUse {...props} locale='en' i18nMessages={messages} />
)
