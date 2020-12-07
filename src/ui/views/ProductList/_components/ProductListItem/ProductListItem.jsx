import * as React from 'react'
import PropTypes from 'prop-types'
import { ProductListItemImage, StyledProductListItem } from './ProductListItem.styles'

export const ProductListItem = ({ product, onClick }) => {
  return (
    <StyledProductListItem onClick={onClick}>
      <ProductListItemImage alt={`Image of phone ${product.brand} ${product.model}`} src={product.image} />
      <div>
        <p>
          <b>Marca:</b> {product.brand}
        </p>
        <p>
          <b>Modelo:</b> {product.model}
        </p>
        {product.price && (
          <p>
            <b>Precio:</b> {product.price}€
          </p>
        )}
      </div>
    </StyledProductListItem>
  )
}

ProductListItem.propTypes = {
  product: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}
