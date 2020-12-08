export const mapProductDtoToProduct = dto => ({
  id: dto.id,
  image: dto.imgUrl,
  brand: dto.brand,
  model: dto.model,
  price: dto.price
})

export const mapProductDetailDtoToProductDetail = dto => ({
  id: dto.id,
  image: dto.imgUrl,
  brand: dto.brand,
  model: dto.model,
  price: dto.price,
  CPU: dto.cpu,
  RAM: dto.ram,
  OS: dto.os,
  screenResolution: dto.displayResolution,
  battery: dto.battery,
  primaryCamera: dto.primaryCamera,
  secondaryCamera: dto.secondaryCmera,
  dimensions: dto.dimentions,
  weight: parseInt(dto.weight),
  storages: dto.options.storages,
  colors: dto.options.colors
})
