import * as React from 'react'
import styled from 'styled-components'
import { useLocation } from 'wouter'
import logo from 'ui/images/logo.png'
import { breakpoints, sizes } from 'ui/theme'
import { Container } from '../Container'
import { BreadCrumbs } from './_components/Breadcrumbs'
import { CartIcon } from './_components/CartIcon'

export const Header = () => {
  const [, setLocation] = useLocation()

  return (
    <StyledHeader>
      <Logo src={logo} onClick={() => setLocation('/')} />
      <BreadCrumbs />
      <CartIcon />
    </StyledHeader>
  )
}

const Logo = styled.img`
  height: 70%;
  max-width: 100%;

  cursor: pointer;

  @media (min-width: ${breakpoints.tabletL}px) {
    height: 100%;
  }
`

const StyledHeader = styled(Container)`
  display: grid;
  grid-template-columns: max-content max-content 1fr;
  align-items: center;
  column-gap: ${sizes.base};

  height: ${sizes.scale(24)};

  padding-bottom: 0;

  & :nth-child(3) {
    justify-self: flex-end;
  }
`
