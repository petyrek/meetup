// @flow
import { compose, prop } from "ramda"
import type { Selector } from "types/Redux"
import type { Animal } from "./types"

// selects the appropriate substore from root store
const base: Selector<*> = prop("animal")

// composes upon the base selector to select specific properties
export const selectAnimals: Selector<Animal[]> = compose(prop("data"), base)
