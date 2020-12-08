import { mapProductDetailDtoToProductDetail, mapProductDtoToProduct } from '../product.mappers'
import { aProduct, aProductDetail, aProductDetailDto, aProductDto } from './product.testDataFactory'

describe('Product dto to product mapper', () => {
  it('maps correctly the values', () => {
    const id = 'id'
    const imageUrl = 'url'
    const brand = 'brand'
    const model = 'model'
    const price = 200

    const productDto = aProductDto({ id, brand, model, price, imgUrl: imageUrl })
    const expectedProduct = aProduct({ id, brand, model, price, image: imageUrl })

    const product = mapProductDtoToProduct(productDto)

    expect(product).toEqual(expectedProduct)
  })
})

describe('Product detail dto to product detail mapper', () => {
  it('maps correctly all the values', () => {
    const id = 'id'
    const imageUrl = 'url'
    const brand = 'brand'
    const model = 'model'
    const price = 200
    const CPU = 'CPU'
    const RAM = 'RAM'
    const OS = 'OS'
    const screenResolution = 'screenResolution'
    const battery = 'battery'
    const primaryCamera = 'primaryCamera'
    const secondaryCamera = 'secondaryCamera'
    const dimensions = 'dimensions'
    const weight = 290
    const storageCode = 1
    const storageName = 'storage'
    const colorCode = 1
    const colorName = 'color'

    const productDetailDto = aProductDetailDto({
      id: id,
      imgUrl: imageUrl,
      brand: brand,
      model: model,
      price: price,
      cpu: CPU,
      ram: RAM,
      os: OS,
      displayResolution: screenResolution,
      battery: battery,
      primaryCamera: primaryCamera,
      secondaryCmera: secondaryCamera,
      dimentions: dimensions,
      weight: `${weight}`,
      options: {
        colors: [{ code: colorCode, name: colorName }],
        storages: [{ code: storageCode, name: storageName }]
      }
    })
    const expectedProductDetail = aProductDetail({
      id: id,
      image: imageUrl,
      brand: brand,
      model: model,
      price: price,
      CPU: CPU,
      RAM: RAM,
      OS: OS,
      screenResolution: screenResolution,
      battery: battery,
      primaryCamera: primaryCamera,
      secondaryCamera: secondaryCamera,
      dimensions: dimensions,
      weight: weight,
      storages: [{ code: storageCode, name: storageName }],
      colors: [{ code: colorCode, name: colorName }]
    })

    const productDetail = mapProductDetailDtoToProductDetail(productDetailDto)

    expect(productDetail).toEqual(expectedProductDetail)
  })
})
