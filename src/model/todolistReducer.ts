import { v1 } from "uuid";
import { TaskType } from "../App";

type TasksReducerActionsType = RemoveTaskACType | AddTaskACType

export const todolistReducer = (state: TaskType[], action: TasksReducerActionsType): TaskType[] => {
  switch (action.type) {
    case 'REMOVE_TASK': {
      const {id} = action.payload
      return state.filter(t => t.id !== id)
    }
    case 'ADD_TASK': {
      const {title} = action.payload
      const newTask = {id: v1(), title, isDone: false}
      return [...state, newTask]
    }
    default:
      return state
  }
}

type RemoveTaskACType = {
  type: 'REMOVE_TASK'
  payload: {
    id: string
  }
}

type AddTaskACType = {
  type: 'ADD_TASK'
  payload: {
    title: string
  }
}

export const removeTaskAC = (id: string): RemoveTaskACType => {
  return {
    type: 'REMOVE_TASK',
    payload: {
      id
    }
  } as const
}

export const addTaskAC = (title: string): AddTaskACType => {
  return {
    type: 'ADD_TASK',
    payload: {
      title
    }
  } as const
}