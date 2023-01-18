import { useReducer } from 'react'

const ACTIONS = {
  UPDATE_KEYWORD: 'UPDATE_KEYWORD',
  UPDATE_RATING: 'UPDATE_RATING'
}

const REDUCER = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case ACTIONS.UPDATE_KEYWORD:
      return {
        ...state,
        keyword: payload
      }
    case ACTIONS.UPDATE_RATING:
      return {
        ...state,
        rating: payload
      }
    default:
      return state
  }
}

export default function useForm ({ initialKeyword, initialRating }) {
  const [state, dispatch] = useReducer(REDUCER, {
    keyword: decodeURIComponent(initialKeyword),
    rating: initialRating
  })

  const { keyword, rating } = state

  return {
    keyword,
    rating,
    updateKeyword: keyword => dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: keyword }),
    updateRating: rating => dispatch({ type: ACTIONS.UPDATE_RATING, payload: rating })

  }
}
