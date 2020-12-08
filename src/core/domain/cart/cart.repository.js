import { apiClient } from 'core/infrastructure/apiClient'
import { apiRouteProvider } from 'core/infrastructure/apiRouteProvider'

const sendProductToCart = async (id, storage, color) => {
  const cartItems = await apiClient.post(apiRouteProvider.addToCart, { id, storageCode: storage, colorCode: color })
  return cartItems.count
}

export const cartRepository = {
  sendProductToCart
}
