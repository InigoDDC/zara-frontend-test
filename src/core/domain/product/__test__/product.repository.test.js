import * as productMappers from 'core/domain/product/product.mappers'
import { apiClient } from 'core/infrastructure/apiClient'
import { apiRouteProvider } from 'core/infrastructure/apiRouteProvider'
import { localStorageService } from 'core/infrastructure/localStorageService'
import { productRepository } from '../product.repository'
import { aProduct, aProductDetail, aProductDto, aProductDetailDto } from './product.testDataFactory'

describe('Product repository', () => {
  describe('when loading the productList', () => {
    it('loads the product list, maps each product and saves it if there is no cache', async () => {
      const expectedProductDtoList = [aProductDto({}), aProductDto({})]
      const expectedProduct = aProduct({})
      const expectedProductList = [expectedProduct, expectedProduct]

      const localStorageGetMock = jest.spyOn(localStorageService, 'get').mockReturnValue(undefined)
      const apiMock = jest.spyOn(apiClient, 'get').mockResolvedValue(expectedProductDtoList)
      const mapperMock = jest.spyOn(productMappers, 'mapProductDtoToProduct').mockReturnValue(expectedProduct)
      const localStorageSaveMock = jest.spyOn(localStorageService, 'save').mockImplementation(() => '')

      const productList = await productRepository.loadProductList()

      expect(localStorageGetMock).toBeCalled()
      expect(apiMock).toBeCalledWith(apiRouteProvider.productList)
      expect(mapperMock).toBeCalledTimes(expectedProductDtoList.length)
      expect(localStorageSaveMock).toBeCalledWith(expect.anything(), expectedProductList)
      expect(productList).toEqual(expectedProductList)
    })

    it('loads the product list from the cache if it exists', async () => {
      const expectedProduct = aProduct({})
      const expectedProductList = [expectedProduct, expectedProduct]

      const localStorageGetMock = jest.spyOn(localStorageService, 'get').mockReturnValue(expectedProductList)

      const productList = await productRepository.loadProductList()

      expect(localStorageGetMock).toBeCalled()
      expect(productList).toEqual(expectedProductList)
    })
  })

  describe('when loading a product detail', () => {
    it('loads the product detail, maps it and saves it if there is no cache', async () => {
      const apiPath = 'path'
      const productId = 'id'
      const expectedProductDetailDto = aProductDetailDto({})
      const expectedProductDetail = aProductDetail({})

      jest.spyOn(apiRouteProvider, 'productDetail').mockReturnValue(apiPath)
      const localStorageGetMock = jest.spyOn(localStorageService, 'get').mockReturnValue(undefined)
      const apiMock = jest.spyOn(apiClient, 'get').mockResolvedValue(expectedProductDetailDto)
      const mapperMock = jest
        .spyOn(productMappers, 'mapProductDetailDtoToProductDetail')
        .mockReturnValue(expectedProductDetail)
      const localStorageSaveMock = jest.spyOn(localStorageService, 'save').mockImplementation(() => '')

      const productDetail = await productRepository.loadProductDetail(productId)

      expect(localStorageGetMock).toBeCalledWith(`productDetail-${productId}`)
      expect(apiMock).toBeCalledWith(apiPath)
      expect(mapperMock).toBeCalledWith(expectedProductDetailDto)
      expect(localStorageSaveMock).toBeCalledWith(`productDetail-${productId}`, expectedProductDetail)
      expect(productDetail).toEqual(expectedProductDetail)
    })

    it('loads the product detail from the cache if it exists', async () => {
      const productId = 'id'
      const expectedProductDetail = aProductDetail({})

      const localStorageGetMock = jest.spyOn(localStorageService, 'get').mockReturnValue(expectedProductDetail)

      const productDetail = await productRepository.loadProductDetail(productId)

      expect(localStorageGetMock).toBeCalledWith(`productDetail-${productId}`)
      expect(productDetail).toEqual(expectedProductDetail)
    })
  })
})
