import {
  MOCK_REDUCER
} from "../types";

const initialState = {
  count: 0,
  name: "michael"
}

export default function(state = initialState, action){
  switch (action.type){
    case MOCK_REDUCER:
      return {
        ...state,
        count: state.count + action.payload.amount
      }
    default:
      return state;
  }
}
