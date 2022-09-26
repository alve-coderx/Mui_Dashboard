import { useContext } from 'react'
import { ModeContext } from '../contexts/ModeProvider'

export const useMode = () => {
  return useContext(ModeContext)
}