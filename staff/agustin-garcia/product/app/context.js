import { createContext, useContext as UseContextFromReact } from 'react'

export const Context = createContext()

export const useContext = () => UseContextFromReact(Context)