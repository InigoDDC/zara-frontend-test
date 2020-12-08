import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { productServices } from 'core/services/product'
import { ProductDetail } from './ProductDetail'
import { aProductDetail } from 'core/domain/product/__test__/product.testDataFactory'

describe('Product detail view', () => {
  it('loads the product detail information', async () => {
    const productId = 'id'
    const expectedProductDetail = aProductDetail({ brand: 'brand' })
    const getProductDetailMock = jest
      .spyOn(productServices, 'getProductDetail')
      .mockResolvedValue(expectedProductDetail)

    render(<ProductDetail productId={productId} />)

    const productBrand = await screen.findByText(expectedProductDetail.brand)

    expect(productBrand).toBeDefined()
    expect(getProductDetailMock).toBeCalledWith(productId)
  })
})
