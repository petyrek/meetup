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

type Reducer = (AnimalReducerState, AnimalAction) => AnimalReducerState
const reducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ANIMAL":
      return {
        data: state.data.concat(action.payload.animal),
        ...state,
      }
    case "REMOVE_ANIMAL":
      return {
        data: state.data.filter(x => x.id !== action.payload.id),
        ...state,
      }
    default:
      return state
  }
}

export default reducer