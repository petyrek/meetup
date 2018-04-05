import dummyData from "./dummyData"

const initialState = {
  data: dummyData,
  loading: false,
}

function reducer(state = initialState, action) {
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
