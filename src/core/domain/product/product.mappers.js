export const mapProductDtoToProduct = dto => ({
  id: dto.id,
  image: dto.imgUrl,
  brand: dto.brand,
  model: dto.model,
  price: dto.price
})
