import { productServices } from 'core/services/product'
import * as React from 'react'
import styled from 'styled-components'
import { Container } from 'ui/components/Container'
import { sizes } from 'ui/theme'
import { ProductListItem } from './_components/ProductListItem'

export const ProductList = () => {
  const [productList, setProductList] = React.useState([])

  React.useEffect(() => {
    const loadProductList = async () => {
      const products = await productServices.getProductList()
      setProductList(products)
    }

    loadProductList()
  })

  return (
    <Container>
      <StyledProductList>
        {productList.map(product => (
          <ProductListItem key={product.id} product={product} onClick={() => ''} />
        ))}
      </StyledProductList>
    </Container>
  )
}

const StyledProductList = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-top: -${sizes.medium};
  margin-left: -${sizes.medium};

  & > * {
    margin-top: ${sizes.medium};
    margin-left: ${sizes.medium};
  }
`
