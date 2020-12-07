import { css } from 'styled-components'

export const fontFaces = css`
  /* roboto-regular - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: local(''), url('../fonts/roboto-v20-latin-regular.woff2') format('woff2'),
      url('../fonts/roboto-v20-latin-regular.woff') format('woff');
  }

  /* roboto-700 - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    src: local(''), url('../fonts/roboto-v20-latin-700.woff2') format('woff2'),
      url('../fonts/roboto-v20-latin-700.woff') format('woff');
  }
`
