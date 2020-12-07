import { mapProductDtoToProduct } from '../product.mappers'
import { aProduct, aProductDto } from './product.testDataFactory'

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
