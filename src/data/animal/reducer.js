// @flow
import type { Animal } from "./types"
import type { AnimalAction } from "./actions"
import dummyData from "./dummyData"

export type AnimalReducerState = {
  data: Animal[],
  loading: boolean,
}

const initialState: AnimalReducerState = {
  data: dummyData,
  loading: false,
}

function reducer(
  state: AnimalReducerState = initialState,
  action: AnimalAction,
) {
  switch (action.type) {
    case "ADD_ANIMAL":
      return {
        data: state.data.concat(action.payload),
        ...state,
      }
    case "REMOVE_ANIMAL": {
      const { payload } = action
      return {
        data: state.data.filter(x => x.id !== payload),
        ...state,
      }
    }
    default:
      return state
  }
}

export default reducer
