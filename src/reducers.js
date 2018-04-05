// @flow
import animalReducer, { type AnimalReducerState } from "./data/animal/reducer"
import { removeAnimal } from "./data/animal/actions"
import { type Animal } from "./data/animal/types"
import bookReducer, { type BookReducerState } from "./data/book/reducer"

const reducers = {
  animal: animalReducer,
  book: bookReducer,
}

export type ReducersState = {
  animal: AnimalReducerState,
  book: BookReducerState,
}

// The more fool proof way to do it
// type ExtractReducerState = <S, A>((S, A) => S) => S
// type ReducersState = $ObjMap<typeof reducers, ExtractReducerState>

export default reducers
