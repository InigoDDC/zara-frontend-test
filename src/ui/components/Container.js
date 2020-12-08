import styled from 'styled-components'
import { breakpoints, sizes } from 'ui/theme'

export const Container = styled.div`
  width: 100%;
  padding: ${sizes.large};

  ${p => p.small && 'max-width: 760px;'}

  @media (min-width: ${breakpoints.tablet}px) {
    width: 420px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: ${breakpoints.tabletL}px) {
    width: 760px;
  }

  @media (min-width: ${breakpoints.desktop}px) {
    width: 950px;
  }

  @media (min-width: ${breakpoints.desktopL}px) {
    width: 1160px;
  }

  @media (min-width: ${breakpoints.desktopXL}px) {
    width: 1400px;
  }

  @media (min-width: ${breakpoints.desktopH}px) {
    width: 1580px;
  }
`
