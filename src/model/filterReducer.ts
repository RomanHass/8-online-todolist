import { FilterValuesType } from "../App"

export const filterReducer = (state: FilterValuesType, action: FilterReducerActionsType) => {
  switch (action.type) {
    case 'CHANGE_FILTER': {
      return action.payload.filter
    }
    default: return state
  }
}

type FilterReducerActionsType = {
  type: 'CHANGE_FILTER'
  payload: {
    filter: FilterValuesType
  }
}

export const changeFilterAC = (filter: FilterValuesType): FilterReducerActionsType => {
  return {
    type: 'CHANGE_FILTER',
    payload: {
      filter
    }
  } as const
}