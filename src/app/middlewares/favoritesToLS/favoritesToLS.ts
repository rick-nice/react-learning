import { Middleware, MiddlewareAPI, Dispatch } from 'redux'

const favoritesToLS: Middleware = ({ getState }: MiddlewareAPI) => (
  next: Dispatch
) => (action) => {
  const previousFavorites = new Set(getState().favorites)
  next(action)
  const newFavorites = new Set(getState().favorites)

  const diff = new Set(
    [...newFavorites].filter((x) => !previousFavorites.has(x))
  )
  if (diff.size !== 0) {
    console.dir(newFavorites)
    localStorage.setItem('favorites', JSON.stringify([...newFavorites]))
  }
}

export default favoritesToLS
