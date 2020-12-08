import { aProductDetail } from 'core/domain/product/__test__/product.testDataFactory'

export const getProductDetail = productId => {
  return new Promise(resolve => resolve(aProductDetail({ id: productId })))
}
