import PropTypes from 'prop-types'
import React from 'react'

const CenteredContent = ({ children }) => (
  <div
    style={{
      margin: '0 auto',
      maxWidth: '1170px'
    }}
  >
    {children}
  </div>
)

CenteredContent.propTypes = {
  children: PropTypes.node.isRequired
}

export default CenteredContent
