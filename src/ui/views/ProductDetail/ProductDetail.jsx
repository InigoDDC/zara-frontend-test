import * as React from 'react'
import PropTypes from 'prop-types'

export const ProductDetail = ({ productId }) => {
  return <div>{productId}</div>
}

ProductDetail.propTypes = {
  productId: PropTypes.string.isRequired
}
