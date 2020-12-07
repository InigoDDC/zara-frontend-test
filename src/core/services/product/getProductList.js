import { aProduct } from 'core/domain/product/__test__/product.testDataFactory'

export const getProductList = () => {
  return new Promise(resolve => resolve([aProduct({}), aProduct({})]))
}
