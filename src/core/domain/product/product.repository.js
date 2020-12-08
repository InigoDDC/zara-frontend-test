import { apiClient } from 'core/infrastructure/apiClient'
import { apiRouteProvider } from 'core/infrastructure/apiRouteProvider'
import { mapProductDetailDtoToProductDetail, mapProductDtoToProduct } from './product.mappers'

const loadProductList = async () => {
  const productDtoList = await apiClient.get(apiRouteProvider.productList)
  return productDtoList.map(mapProductDtoToProduct)
}

const loadProductDetail = async productId => {
  const productDetailDto = await apiClient.get(apiRouteProvider.productDetail(productId))
  return mapProductDetailDtoToProductDetail(productDetailDto)
}

export const productRepository = {
  loadProductList,
  loadProductDetail
}
