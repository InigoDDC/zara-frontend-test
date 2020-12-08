import * as React from 'react'

import { LoadBar, LoadBarContainer } from './Loader.styles'

export const Loader = () => {
  return (
    <LoadBarContainer>
      <LoadBar color="darkBlue" />
      <LoadBar color="brown" delaySeconds={0.1} />
      <LoadBar color="orange" delaySeconds={0.2} />
    </LoadBarContainer>
  )
}
