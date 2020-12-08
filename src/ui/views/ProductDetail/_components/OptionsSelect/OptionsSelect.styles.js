import styled from 'styled-components'
import { colors, sizes } from 'ui/theme'

export const StyledSelect = styled.div.attrs({})`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;

  position: relative;

  height: ${sizes.scale(10)};

  padding-right: ${sizes.small};

  background-color: ${colors.white};
  border: 1px solid ${colors.white};
  border-radius: ${sizes.small};
`

export const StyledOptionsSelect = styled.select`
  height: ${sizes.scale(10)};
  width: 100%;

  padding-left: ${sizes.small};
  border: 0;

  background-color: ${colors.white};
  border-radius: ${sizes.small};
`
