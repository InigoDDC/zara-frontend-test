import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { ProductList } from './ProductList'
import { aProduct } from 'core/domain/product/__test__/product.testDataFactory'
import { productServices } from 'core/services/product'

describe('Product list view', () => {
  it('loads the products from the service', async () => {
    const product1 = aProduct({ id: 'id1', brand: 'brand1' })
    const product2 = aProduct({ id: 'id2', brand: 'brand2' })
    const expectedProductList = [product1, product2]
    const getProductListMock = jest.spyOn(productServices, 'getProductList').mockResolvedValue(expectedProductList)

    render(<ProductList />)

    const product1Element = await screen.findByText(product1.brand)
    const product2Element = await screen.findByText(product1.brand)

    expect(getProductListMock).toBeCalled()
    expect(product1Element).toBeDefined()
    expect(product2Element).toBeDefined()
  })

  it('redirects to an items detail page when the item is clicked', () => {})
})
