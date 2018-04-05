export const addAnimal = animal => ({
  type: "ADD_ANIMAL",
  payload: animal,
})

export const removeAnimal = id => ({
  type: "REMOVE_ANIMAL",
  payload: id,
})
