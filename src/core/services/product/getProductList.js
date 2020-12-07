import { productRepository } from 'core/domain/product/product.repository'

export const getProductList = () => productRepository.loadProductList()
