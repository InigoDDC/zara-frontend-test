export const aProduct = ({ ...options }) => {
  const baseProduct = {
    id: 'sdavasdgsdf',
    image: 'https://picsum.photos/160/212',
    brand: 'Acer',
    model: 'IP3800 (5i)',
    price: 300
  }

  return Object.assign({}, baseProduct, options)
}
