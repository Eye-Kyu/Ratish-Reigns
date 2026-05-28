import { createContext, useContext, useReducer } from 'react'
import type { Product } from './products'

export type CartItem = { product: Product; qty: number }

type State  = { items: CartItem[] }
type Action =
  | { type: 'ADD';    product: Product }
  | { type: 'REMOVE'; name: string }
  | { type: 'INC';    name: string }
  | { type: 'DEC';    name: string }
  | { type: 'CLEAR' }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD': {
      const hit = state.items.find(i => i.product.name === action.product.name)
      if (hit) {
        return { items: state.items.map(i => i.product.name === hit.product.name ? { ...i, qty: i.qty + 1 } : i) }
      }
      return { items: [...state.items, { product: action.product, qty: 1 }] }
    }
    case 'REMOVE':
      return { items: state.items.filter(i => i.product.name !== action.name) }
    case 'INC':
      return { items: state.items.map(i => i.product.name === action.name ? { ...i, qty: i.qty + 1 } : i) }
    case 'DEC':
      return {
        items: state.items
          .map(i => i.product.name === action.name ? { ...i, qty: i.qty - 1 } : i)
          .filter(i => i.qty > 0),
      }
    case 'CLEAR':
      return { items: [] }
    default:
      return state
  }
}

type CartCtxValue = {
  items:           CartItem[]
  total:           number
  addToCart:       (product: Product) => void
  removeFromCart:  (name: string) => void
  increment:       (name: string) => void
  decrement:       (name: string) => void
  clearCart:       () => void
}

const CartCtx = createContext<CartCtxValue>({
  items: [], total: 0,
  addToCart: () => {}, removeFromCart: () => {},
  increment: () => {}, decrement: () => {}, clearCart: () => {},
})

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { items: [] })
  const total = state.items.reduce((sum, i) => sum + i.product.priceValue * i.qty, 0)

  return (
    <CartCtx.Provider value={{
      items:          state.items,
      total,
      addToCart:      (product) => dispatch({ type: 'ADD',    product }),
      removeFromCart: (name)    => dispatch({ type: 'REMOVE', name }),
      increment:      (name)    => dispatch({ type: 'INC',    name }),
      decrement:      (name)    => dispatch({ type: 'DEC',    name }),
      clearCart:      ()        => dispatch({ type: 'CLEAR' }),
    }}>
      {children}
    </CartCtx.Provider>
  )
}

export const useCart = () => useContext(CartCtx)
