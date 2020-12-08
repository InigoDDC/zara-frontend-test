import * as React from 'react'
import PropTypes from 'prop-types'
import { productServices } from 'core/services/product'
import {
  Button,
  ProductDetailImage,
  ProductDetails,
  ProductDetailSelectBlock,
  StyledProductDetail
} from './ProductDetail.styles'
import { OptionsSelect } from './_components/OptionsSelect'
import { ListItem } from './_components/ListItem'
import { CartContext } from 'ui/components/CartContextProvider'
import { cartServices } from 'core/services/cart'

export const ProductDetail = ({ productId }) => {
  const [productDetail, setProductDetail] = React.useState()
  const [storageValue, setStorageValue] = React.useState()
  const [colorValue, setColorValue] = React.useState()

  const cart = React.useContext(CartContext)

  React.useEffect(() => {
    const loadProductDetail = async () => {
      const newProductDetail = await productServices.getProductDetail(productId)
      setProductDetail(newProductDetail)
      if (newProductDetail.storages.length === 1) {
        setStorageValue(newProductDetail.storages[0])
      }
      if (newProductDetail.colors.length === 1) {
        setColorValue(newProductDetail.colors[0])
      }
    }

    loadProductDetail()
  }, [])

  const handleStorageChange = storage => {
    setStorageValue(parseInt(storage))
  }

  const handleColorChange = color => {
    setColorValue(parseInt(color))
  }

  const onAddToCart = async () => {
    if (storageValue && colorValue) {
      const itemCount = await cartServices.addProductToCart(productDetail.id, storageValue, colorValue)
      cart.setItemCount(itemCount)
    }
  }

  if (!productDetail) {
    return <p>Loading</p>
  }

  return (
    <StyledProductDetail>
      <ProductDetailImage src={productDetail.image} />
      <div>
        <ProductDetails>
          <ListItem label="Marca:">{productDetail.brand}</ListItem>
          <ListItem label="Modelo:">{productDetail.model}</ListItem>
          <ListItem label="Precio:">{productDetail.price}€</ListItem>
          <ListItem label="CPU:">{productDetail.CPU}</ListItem>
          <ListItem label="RAM:">{productDetail.RAM}</ListItem>
          <ListItem label="Sistema operativo:">{productDetail.OS}</ListItem>
          <ListItem label="Resolución de pantalla:">{productDetail.screenResolution}</ListItem>
          <ListItem label="Batería:">{productDetail.battery}</ListItem>
          <ListItem label="Cámara trasera:">{productDetail.primaryCamera}</ListItem>
          <ListItem label="Cámara frontal:">{productDetail.secondaryCamera}</ListItem>
          <ListItem label="Dimensiones:">{productDetail.dimensions}</ListItem>
          <ListItem label="Peso:">{productDetail.weight}g</ListItem>
        </ProductDetails>
        <div>
          <ProductDetailSelectBlock>
            <b>Elige tamaño de almacenamiento: </b>
            <OptionsSelect
              dataTestid="storage-select"
              placeholder="Selecciona un tamaño de memoria"
              options={productDetail.storages}
              onChange={handleStorageChange}
            />
          </ProductDetailSelectBlock>
          <ProductDetailSelectBlock>
            <b>Elige el color del dispositivo: </b>
            <OptionsSelect
              dataTestid="color-select"
              placeholder="Selecciona un color"
              options={productDetail.colors}
              onChange={handleColorChange}
            />
          </ProductDetailSelectBlock>
          <Button disabled={!storageValue || !colorValue} onClick={onAddToCart}>
            Añadir al carrito
          </Button>
        </div>
      </div>
    </StyledProductDetail>
  )
}

ProductDetail.propTypes = {
  productId: PropTypes.string.isRequired
}
