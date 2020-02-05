import React from 'react'
import Jumbotron from './jumbotron'

import messages from '../../../locales/en/jumbotron'
import 'intl/locale-data/jsonp/en'

export default props => (
  <Jumbotron {...props} locale='en' i18nMessages={messages} />
)
