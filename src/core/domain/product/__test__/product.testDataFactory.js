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

export const aProductDto = ({ ...options }) => {
  const baseProduct = {
    id: 'sdavasdgsdf',
    imgUrl: 'https://picsum.photos/160/212',
    brand: 'Acer',
    model: 'IP3800 (5i)',
    price: 300
  }

  return Object.assign({}, baseProduct, options)
}

export const aProductDetail = ({ ...options }) => {
  const baseProduct = {
    id: 'sdavasdgsdf',
    image: 'https://picsum.photos/160/212',
    brand: 'Acer',
    model: 'IP3800 (5i)',
    price: 300,
    CPU: 'Alcomm Atheros Quad-Core',
    RAM: '8GB',
    OS: 'Android Nougat',
    screenResolution: '7.0 inches (~69.8% screen-to-body ratio)',
    battery: 'Non-removable Li-Ion 3400 mAh battery (12.92 Wh)',
    primaryCamera: '13 MP - Autofocus',
    secondaryCamera: '2 MP - 720p',
    dimensions: '191.7 x 101 x 9.4 mm (7.55 x 3.98 x 0.37 in)',
    weight: 260,
    colors: [
      {
        code: 1000,
        name: 'Black'
      }
    ],
    storages: [
      {
        code: 2000,
        name: '16 GB'
      },
      {
        code: 2001,
        name: '32 GB'
      }
    ]
  }

  return Object.assign({}, baseProduct, options)
}
