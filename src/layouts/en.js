import React from 'react'
import Layout from './index'

import messages from '../locales/en'
import 'intl/locale-data/jsonp/en'

export default props => (
  <Layout {...props} locale='en' i18nMessages={messages} />
)
