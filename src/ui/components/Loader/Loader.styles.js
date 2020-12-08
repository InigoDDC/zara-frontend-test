import styled, { keyframes } from 'styled-components'
import { colors, sizes } from '../../theme'

const loadAnimation = keyframes`
  0% {
    height: ${sizes.large};
  }

  25% {
    height: ${sizes.scale(14)};
  }

  50% {
    height: ${sizes.large};
  }

  100% {
    height: ${sizes.large};
  }
`

export const LoadBar = styled.div`
  height: ${sizes.xLarge};
  width: ${sizes.base};

  background-color: ${p => colors[p.color]};
  animation: ${loadAnimation} 1s ease-in-out infinite;
  animation-delay: ${p => p.delaySeconds && `${p.delaySeconds}s`};
`

export const LoadBarContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: ${sizes.small};
  justify-content: center;
  align-items: end;

  height: ${sizes.scale(14)};

  transform: translate(-50%, -50%);
`
