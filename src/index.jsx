import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'wouter'
import { Root } from './ui'

ReactDOM.render(
  <Router base=".">
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
)
