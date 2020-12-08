import * as React from 'react'
import { Link, useLocation } from 'wouter'

export const BreadCrumbs = () => {
  const [location] = useLocation()

  if (location === '/') {
    return <b>Home</b>
  }

  return (
    <div>
      <Link href="/">Home</Link>
      <b> &gt; Product detail</b>
    </div>
  )
}
