export const apiRouteProvider = {
  productList: '/api/product',
  productDetail: productId => `/api/product/${productId}`,
  addToCart: '/api/cart'
}
