import { cartRepository } from 'core/domain/cart/cart.repository'
import { addProductToCart } from '../addProductToCart'

describe('Add product to cart service', () => {
  it('adds the products to the cart and obtains the product count', async () => {
    const expectedItemCount = 1
    const id = 'id'
    const storageCode = 1
    const colorCode = 2
    const repositoryMock = jest.spyOn(cartRepository, 'sendProductToCart').mockResolvedValue(expectedItemCount)

    const itemCount = await addProductToCart(id, storageCode, colorCode)

    expect(repositoryMock).toBeCalledWith(id, storageCode, colorCode)
    expect(itemCount).toEqual(expectedItemCount)
  })
})
