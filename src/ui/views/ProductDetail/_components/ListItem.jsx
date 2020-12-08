import * as React from 'react'
import PropTypes from 'prop-types'

export const ListItem = ({ label, children }) => {
  return (
    <>
      <b>{label}</b>
      <p>{children}</p>
    </>
  )
}

ListItem.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
}
