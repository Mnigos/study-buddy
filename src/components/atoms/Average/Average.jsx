import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from './Average.style'

const Average = ({ value }) => <Wrapper value={value}>{value}</Wrapper>

Average.propTypes = {
  value: PropTypes.string.isRequired,
}

export default Average
