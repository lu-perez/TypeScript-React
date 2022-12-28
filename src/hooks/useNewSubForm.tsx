import { useCallback, useReducer } from 'react'
import { Sub } from '../types'

const INITIAL_STATE = {
  name: '',
  subMonths: 0,
  avatar: '',
  description: ''
}

interface FormState {
  inputValues: Sub
}

type FormReducerAction = {
  type: 'change_value',
  payload: {
    inputName: string,
    inputValue: string
  }
} | {
  type: 'clear'
}

const formReducer = (state: FormState['inputValues'], action: FormReducerAction) => {
  switch (action.type) {
    case 'change_value':
      const { inputName, inputValue } = action.payload
      return {
        ...state,
        [inputName]: inputValue
      }
    case 'clear':
      return INITIAL_STATE
  }
}

export const useNewSubForm = () => {
  const [inputValues, dispatch] = useReducer(formReducer, INITIAL_STATE)

  const changeValue = useCallback((payload: { inputName: string, inputValue: string }) => { dispatch({ type: 'change_value', payload })}, [])
  const clearForm = useCallback(() => dispatch({ type: 'clear' }), [])
  
  return {
    formState: inputValues,
    changeValue,
    clearForm
  }
}
