import { Dispatch } from 'redux'

const URL = 'https://api.punkapi.com/v2/beers'

type IRequest = () => {
  type: string
}

type ISuccessResponse = (
  payload: any[]
) => {
  type: string
  payload: any[]
}

type IFailureResponse = (
  payload: object
) => {
  type: string
  payload: object
  error: boolean
}

const fetchAndDispatch = (
  request: IRequest,
  successRes: ISuccessResponse,
  failureRes: IFailureResponse
) => async (dispatch: Dispatch, urlWithRoute: string) => {
  try {
    dispatch(request())
    const response = await fetch(`${URL}${urlWithRoute}`)
    const data = await response.json()

    dispatch(successRes(data))
  } catch (err) {
    dispatch(failureRes(err))
  }
}

export { fetchAndDispatch, URL }
