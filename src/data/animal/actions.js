// @flow
import type { Animal } from "./types"

type AddAnimal = { type: "ADD_ANIMAL", payload: Animal }
export const addAnimal = (x: Animal): AddAnimal => ({
  type: "ADD_ANIMAL",
  payload: x,
})

type RemoveAnimal = { type: "REMOVE_ANIMAL", payload: number }
export const removeAnimal = (id: number): RemoveAnimal => ({
  type: "REMOVE_ANIMAL",
  payload: id,
})

export type AnimalAction = AddAnimal | RemoveAnimal
