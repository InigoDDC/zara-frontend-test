import { apiClient } from 'core/infrastructure/apiClient'
import { apiRouteProvider } from 'core/infrastructure/apiRouteProvider'
import { cartRepository } from '../cart.repository'

describe('Cart repository', () => {
  it('sends the product to the cart and gives the cart product count', async () => {
    const expectedItemCount = 1
    const id = 'id'
    const storageCode = 1
    const colorCode = 2
    const apiMock = jest.spyOn(apiClient, 'post').mockResolvedValue({ count: expectedItemCount })

    const itemCount = await cartRepository.sendProductToCart(id, storageCode, colorCode)

    expect(apiMock).toBeCalledWith(apiRouteProvider.addToCart, { id, storageCode, colorCode })
    expect(itemCount).toEqual(expectedItemCount)
  })
})
