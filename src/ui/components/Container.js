import styled from 'styled-components'
import { breakpoints, sizes } from 'ui/theme'

export const Container = styled.div`
  width: 100%;
  padding: ${sizes.medium};

  ${p => p.small && 'max-width: 792px;'}

  @media (min-width: ${breakpoints.tablet}px) {
    width: 420px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: ${breakpoints.tabletL}px) {
    width: 792px;
  }

  @media (min-width: ${breakpoints.desktopL}px) {
    width: 1192px;
    padding: ${sizes.large};
  }

  @media (min-width: ${breakpoints.desktopH}px) {
    width: 1580px;
  }
`
