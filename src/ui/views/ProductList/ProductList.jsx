import { productServices } from 'core/services/product'
import * as React from 'react'
import styled from 'styled-components'
import { Container } from 'ui/components/Container'
import { Loader } from 'ui/components/Loader'
import { sizes } from 'ui/theme'
import { useLocation } from 'wouter'
import { ProductListItem } from './_components/ProductListItem'
import { SearchBox } from './_components/SearchBox'

export const ProductList = () => {
  const [, setLocation] = useLocation()
  const [productList, setProductList] = React.useState([])
  const [filteredProductList, setFilteredProductList] = React.useState(productList)

  React.useEffect(() => {
    const loadProductList = async () => {
      const products = await productServices.getProductList()
      setProductList(products)
      setFilteredProductList(products)
    }

    loadProductList()
  }, [])

  const handleSearch = search => {
    setFilteredProductList(
      productList.filter(
        product =>
          product.brand.toLowerCase().includes(search.toLowerCase()) ||
          product.model.toLowerCase().includes(search.toLowerCase())
      )
    )
  }

  const handleItemClick = productId => {
    setLocation(`/${productId}`)
  }

  if (productList.length === 0) {
    return <Loader />
  }

  return (
    <Container>
      <SearchBox onChange={handleSearch} />
      <StyledProductList>
        {filteredProductList.map(product => (
          <ProductListItem key={product.id} product={product} onClick={handleItemClick} />
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
