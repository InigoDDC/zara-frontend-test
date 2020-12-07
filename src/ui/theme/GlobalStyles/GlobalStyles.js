import { createGlobalStyle } from 'styled-components'
import { reboot } from './reboot'
import { reset } from './reset'

export const GlobalStyles = createGlobalStyle`
  ${reset};
  ${reboot};
`
