import * as productMappers from 'core/domain/product/product.mappers'
import { apiClient } from 'core/infrastructure/apiClient'
import { apiRouteProvider } from 'core/infrastructure/apiRouteProvider'
import { productRepository } from '../product.repository'
import { aProduct, aProductDto } from './product.testDataFactory'

describe('Product repository', () => {
  it('loads the product list and maps each product', async () => {
    const expectedProductDtoList = [aProductDto({}), aProductDto({})]
    const expectedProduct = aProduct({})
    const expectedProductList = [expectedProduct, expectedProduct]

    const apiMock = jest.spyOn(apiClient, 'get').mockResolvedValue(expectedProductDtoList)
    const mapperMock = jest.spyOn(productMappers, 'mapProductDtoToProduct').mockReturnValue(expectedProduct)

    const productList = await productRepository.loadProductList()

    expect(apiMock).toBeCalledWith(apiRouteProvider.productList)
    expect(mapperMock).toBeCalledTimes(expectedProductDtoList.length)
    expect(productList).toEqual(expectedProductList)
  })
})
