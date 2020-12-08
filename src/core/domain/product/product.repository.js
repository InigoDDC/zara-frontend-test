import { apiClient } from 'core/infrastructure/apiClient'
import { apiRouteProvider } from 'core/infrastructure/apiRouteProvider'
import { localStorageService } from 'core/infrastructure/localStorageService'
import { mapProductDetailDtoToProductDetail, mapProductDtoToProduct } from './product.mappers'

const loadProductList = async () => {
  const productListCache = localStorageService.get('productList')
  if (productListCache) {
    return productListCache
  }

  const productDtoList = await apiClient.get(apiRouteProvider.productList)
  const mappedDtoList = productDtoList.map(mapProductDtoToProduct)
  localStorageService.save('productList', mappedDtoList)
  return mappedDtoList
}

const loadProductDetail = async productId => {
  const productListCache = localStorageService.get(`productDetail-${productId}`)
  if (productListCache) {
    return productListCache
  }

  const productDetailDto = await apiClient.get(apiRouteProvider.productDetail(productId))
  const mappedProductDetail = mapProductDetailDtoToProductDetail(productDetailDto)
  localStorageService.save(`productDetail-${productId}`, mappedProductDetail)
  return mappedProductDetail
}

export const productRepository = {
  loadProductList,
  loadProductDetail
}
