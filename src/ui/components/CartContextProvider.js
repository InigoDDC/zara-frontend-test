import * as React from 'react'
import PropTypes from 'prop-types'

export const CartContext = React.createContext({ itemCount: 0, setItemCount: () => {} })

export const CartContextProvider = ({ children }) => {
  const [itemCount, setItemCount] = React.useState(0)

  return <CartContext.Provider value={{ itemCount, setItemCount }}>{children}</CartContext.Provider>
}

CartContextProvider.propTypes = {
  children: PropTypes.any
}
