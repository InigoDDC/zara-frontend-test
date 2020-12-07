import { apiClient } from 'core/infrastructure/apiClient'
import { apiRouteProvider } from 'core/infrastructure/apiRouteProvider'
import { mapProductDtoToProduct } from './product.mappers'

const loadProductList = async () => {
  const productDtoList = await apiClient.get(apiRouteProvider.productList)
  return productDtoList.map(mapProductDtoToProduct)
}

export const productRepository = {
  loadProductList
}
