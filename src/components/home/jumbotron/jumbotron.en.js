import React from 'react'
import Jumbotron from './jumbotron'
import { addLocaleData } from 'react-intl'

import messages from '../../../locales/en/jumbotron'
import en from 'react-intl/locale-data/en'
import 'intl/locale-data/jsonp/en'

addLocaleData(en)

export default props => (
  <Jumbotron {...props} locale='en' i18nMessages={messages} />
)
