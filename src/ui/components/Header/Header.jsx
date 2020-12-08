import * as React from 'react'
import styled from 'styled-components'
import { useLocation } from 'wouter'
import logo from 'ui/images/logo.png'
import { sizes } from 'ui/theme'
import { Container } from '../Container'
import { BreadCrumbs } from './Breadcrumbs'

export const Header = () => {
  const [, setLocation] = useLocation()

  return (
    <StyledHeader>
      <Logo src={logo} onClick={() => setLocation('/')} />
      <BreadCrumbs />
      {/* <CartIcon /> */}
    </StyledHeader>
  )
}

const Logo = styled.img`
  height: 100%;

  cursor: pointer;
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
