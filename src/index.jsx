import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyles } from 'ui/theme'
import { Router } from 'wouter'
import { Root } from './ui'

ReactDOM.render(
  <Router base=".">
    <React.StrictMode>
      <GlobalStyles />
      <Root />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
)
