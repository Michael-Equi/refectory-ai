import {
  MOCK_REDUCER
} from "../types";

export const changeCount = (amount) => ({
  type: MOCK_REDUCER,
  payload: {
    amount: amount
    }
});
