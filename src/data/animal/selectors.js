// @flow
import { compose, prop } from "ramda"
import type { Selector } from "types/redux"
import type { ReducersState } from "reducers"
import type { AnimalReducerState } from "./reducer"
import type { Animal } from "./types"

// the most verbose way with explicit returns
const base0 = (state: ReducersState): AnimalReducerState => state.animal

// the less verbose way with infered return
const base1 = (state: ReducersState) => state.animal

// the less verbose way using our polymoprhic type with explicit return
const base2: Selector<AnimalReducerState> = state => state.animal

// the least verbose way using our polymoprhic type with infered return in pointfree style
const base3: Selector<*> = prop("animal")

// composes upon the base selector to select specific properties
export const selectAnimals: Selector<*> = compose(prop("data"), base3)

// const fakeState = {
//   animal: {
//     data: [],
//     loading: false,
//   },
//   book: {
//     loading: false,
//   },
// }
// const res = selectAnimals(fakeState)
// console.log(res[0].name)
