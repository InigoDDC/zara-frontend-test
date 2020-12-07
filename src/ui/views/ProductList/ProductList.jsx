import { productServices } from 'core/services/product'
import * as React from 'react'

export const ProductList = () => {
  const [productList, setProductList] = React.useState([])

  React.useEffect(() => {
    const loadProductList = async () => {
      const products = await productServices.getProductList()
      setProductList(products)
    }

    loadProductList()
  })

  return (
    <div>
      {productList.map(product => (
        <div key={product.id}>
          <img src={product.image} />
          <p>{product.brand}</p>
        </div>
      ))}
    </div>
  )
}
