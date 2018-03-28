// @flow
import * as React from "react"
import type { Animal } from "./types"
import type { ReduxAction } from "types/Redux"

type AnimalActionType = "ADD_ANIMAL" | "REMOVE_ANIMAL"

type AddAnimalAction = ReduxAction<AnimalActionType, "ADD_ANIMAL", *>
export const addAnimal = (animal: Animal): AddAnimalAction => ({
  type: "ADD_ANIMAL",
  payload: {
    animal,
  },
})

type RemoveAnimalAction = ReduxAction<AnimalActionType, "REMOVE_ANIMAL", *>
export const removeAnimal = (id: number): RemoveAnimalAction => ({
  type: "REMOVE_ANIMAL",
  payload: {
    id,
  },
})

export type AnimalAction = AddAnimalAction | RemoveAnimalAction
