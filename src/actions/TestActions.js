export function setFavorite(id) {
  return {
    type: 'SET_FAVORITE',
    payload: id,
  }
}

export function getRandomBeer(id) {
  return async (dispatch) => {
    dispatch({
      type: 'GET_SOME_BEER',
      payload: id,
    })

    try {
      const response = await fetch(`https://api.punkapi.com/v2/beers/${id}`)
      const beers = await response.json()
      dispatch({
        type: 'GET_BEER_SUCCESS',
        payload: beers,
      })
    } catch (err) {
      dispatch({
        type: 'GET_BEER_FAILURE',
        payload: err,
        error: true,
      })
    }
  }
}
