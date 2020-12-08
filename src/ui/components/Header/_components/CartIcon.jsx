import * as React from 'react'
import styled from 'styled-components'
import { CartContext } from 'ui/components/CartContextProvider'
import cart from 'ui/icons/cart.png'
import { colors, sizes } from 'ui/theme'

export const CartIcon = () => {
  const context = React.useContext(CartContext)

  return (
    <StyledIcon>
      <CartImage src={cart} />
      <CartNumber>{context.itemCount}</CartNumber>
    </StyledIcon>
  )
}

const StyledIcon = styled.div`
  position: relative;

  width: ${sizes.xLarge};
  height: ${sizes.xLarge};
`

const CartImage = styled.img`
  width: 100%;
`

const CartNumber = styled.div`
  position: absolute;
  top: 0;
  right: -${sizes.small};

  padding-left: ${sizes.small};
  padding-right: ${sizes.small};

  font-weight: bold;
  border-radius: 9999px; //? Circle borders

  background-color: ${colors.orange};
`
