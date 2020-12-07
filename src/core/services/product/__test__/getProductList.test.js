import { productRepository } from 'core/domain/product/product.repository'
import { aProduct } from 'core/domain/product/__test__/product.testDataFactory'
import { getProductList } from '../getProductList'

describe('Get product list service', () => {
  it('gets and returns the product list', async () => {
    const expectedProductList = [aProduct({ id: 'id1' }), aProduct({ id: 'id2' })]
    const repositoryMock = jest.spyOn(productRepository, 'loadProductList').mockResolvedValue(expectedProductList)

    const productList = await getProductList()

    expect(repositoryMock).toBeCalled()
    expect(productList).toEqual(expectedProductList)
  })
})
