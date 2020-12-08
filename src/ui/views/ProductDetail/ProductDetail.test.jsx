import * as React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { productServices } from 'core/services/product'
import { ProductDetail } from './ProductDetail'
import { aProductDetail } from 'core/domain/product/__test__/product.testDataFactory'
import { cartServices } from 'core/services/cart'
import { CartContext } from 'ui/components/CartContextProvider'

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

  it('sends the product id and the chosen storage and color to the cart when clicking the button', async () => {
    const productId = 'id'
    const selectedStorageCode = 5
    const selectedColorCode = 7
    const expectedItemCount = 1
    jest.spyOn(productServices, 'getProductDetail').mockResolvedValue(
      aProductDetail({
        id: productId,
        storages: [{ code: selectedStorageCode, name: 'storage' }],
        colors: [{ code: selectedColorCode, name: 'color' }]
      })
    )
    const addToCartMock = jest.spyOn(cartServices, 'addProductToCart').mockResolvedValue(expectedItemCount)
    const contextMock = jest.fn()

    render(
      <CartContext.Provider value={{ itemCount: 0, setItemCount: contextMock }}>
        <ProductDetail productId={productId} />
      </CartContext.Provider>
    )

    const storageSelect = await screen.findByTestId('storage-select')
    const colorSelect = await screen.findByTestId('color-select')

    fireEvent.change(storageSelect, { target: { value: selectedStorageCode } })
    fireEvent.change(colorSelect, { target: { value: selectedColorCode } })

    const cartButton = await screen.findByText(/carrito/i)

    fireEvent.click(cartButton)

    await waitFor(() => {
      expect(addToCartMock).toBeCalledWith(productId, selectedStorageCode, selectedColorCode)
      expect(contextMock).toBeCalledWith(expectedItemCount)
    })
  })
})
