// @flow
import animalReducer, { type AnimalReducerState } from "./data/animal/reducer"
import bookReducer, { type BookReducerState } from "./data/book/reducer"

export type ReducersState = {
  animal: AnimalReducerState,
  book: BookReducerState,
}

const reducers = {
  animal: animalReducer,
  book: bookReducer,
}

export default reducers
