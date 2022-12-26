import React from 'react'
import { Sub } from '../types'

interface Props {
  children: string, // React.ReactNode instead any
  subs: Sub[]
}

const Parent = ({ children, subs }: Props) => {
  return (
    <>
      {children} 
      <ul>
        {
          subs.map(sub => (
            <li key={sub.name}>{sub.name}</li>
          ))
        }
      </ul>
    </>
  )
}

export default Parent
