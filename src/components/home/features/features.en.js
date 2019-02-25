import React from 'react'
import Features from './features'
import { addLocaleData } from 'react-intl'

import messages from '../../../locales/en/features'
import en from 'react-intl/locale-data/en'
import 'intl/locale-data/jsonp/en'

addLocaleData(en)

export default props => (
  <Features {...props} locale='en' i18nMessages={messages} />
)
