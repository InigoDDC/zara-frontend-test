import styled from 'styled-components'
import { Container } from 'ui/components/Container'
import { breakpoints, colors, sizes } from 'ui/theme'

export const StyledProductDetail = styled(Container).attrs({ small: true })`
  display: grid;
  row-gap: ${sizes.large};

  @media (min-width: ${breakpoints.tabletL}px) {
    grid-template-columns: auto 1fr;
    column-gap: ${sizes.large};
  }
`

export const ProductDetailImage = styled.img`
  display: block;

  margin-left: auto;
  margin-right: auto;
`

export const ProductDetails = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  column-gap: ${sizes.base};
  row-gap: ${sizes.small};

  margin-bottom: ${sizes.xLarge};

  & > :nth-child(2n) {
    align-self: flex-end;
  }
`

export const ProductDetailSelectBlock = styled.div`
  display: grid;
  row-gap: ${sizes.small};

  margin-bottom: ${sizes.base};
`

export const Button = styled.div`
  width: 100%;

  padding: ${sizes.small} ${sizes.base};
  margin-top: ${sizes.large};

  font-weight: bold;

  color: ${colors.lighterBlue};
  background-color: ${p => (p.disabled ? colors.grey : colors.blue)};
  border-radius: ${sizes.small};
`
