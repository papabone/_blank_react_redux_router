import {
  FOCUS_ON_LOAD
} from '../constants/app'

export function focus(input) {

  return (dispatch) => {

    dispatch({
      type: FOCUS_ON_LOAD,
      payload: input
    })

  }
}
