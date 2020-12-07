import styled from 'styled-components'
import { colors, sizes } from 'ui/theme'

export const StyledProductListItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: ${sizes.base};
  width: ${sizes.scale(90)}; //? Criterios de diseño

  padding: ${sizes.base};

  background-color: ${colors.white};
  box-shadow: 0 25px 30px -20px rgba(0, 0, 0, 0.2);

  border-radius: ${sizes.small};
  cursor: pointer;
  transition: box-shadow 0.2s ease-out, transform 0.2s ease-out;

  :hover {
    box-shadow: 0 25px 30px -10px rgba(0, 0, 0, 0.4);
    transform: translateY(-2%);
  }
`

export const ProductListItemImage = styled.img`
  display: block;

  width: 100%;

  margin-left: auto;
  margin-right: auto;
`
