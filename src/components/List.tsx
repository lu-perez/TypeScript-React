import React from 'react'
import { Sub } from '../interfaces/interfaces'

interface Props {
  subs: Sub[]
}

const List = ({ subs }: Props) => {
  const renderList = (): JSX.Element[] => {
    return (
      subs.map((sub) => (
        <li key={sub.name}>
          <img src={sub.avatar} alt={`Avatar for ${sub.name}`} />
          <h4>{sub.name} (<small>{sub.subMonths}</small>)</h4>
          <p>{sub.description?.substring(0, 100)}</p>
        </li>
      ))
    )
  }
  
  return (
    <ul>
      {renderList()}
    </ul>
  )
}

export default List
