import { cartRepository } from 'core/domain/cart/cart.repository'

export const addProductToCart = (id, storage, color) => cartRepository.sendProductToCart(id, storage, color)
