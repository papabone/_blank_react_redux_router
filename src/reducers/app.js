import {
  FOCUS_ON_LOAD
} from '../constants/app'

const initialState = {
  count: 0
}

export default function app(state = initialState, action) {

  switch (action.type) {
    case FOCUS_ON_LOAD:

      return {
        ...state, count: ++state.count, focused: action.payload 
      }

    default:
      return state;
  }

}
