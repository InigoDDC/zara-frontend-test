import { productRepository } from 'core/domain/product/product.repository'
import { aProductDetail } from 'core/domain/product/__test__/product.testDataFactory'
import { getProductDetail } from '../getProductDetail'

describe('Get product detail service', () => {
  it('gets the product detail', async () => {
    const productId = 'id'
    const expectedProductDetail = aProductDetail({})
    const repositoryMock = jest.spyOn(productRepository, 'loadProductDetail').mockResolvedValue(expectedProductDetail)

    const productDetail = await getProductDetail(productId)

    expect(repositoryMock).toBeCalledWith(productId)
    expect(productDetail).toEqual(expectedProductDetail)
  })
})
