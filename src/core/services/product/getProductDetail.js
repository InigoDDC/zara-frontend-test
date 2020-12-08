import { productRepository } from 'core/domain/product/product.repository'

export const getProductDetail = async productId => await productRepository.loadProductDetail(productId)
