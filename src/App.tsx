import { useEffect, useState } from 'react'
import { Sub } from './interfaces/interfaces'
import List from './components/List'
import initialSubs from '../data/subs.json'
import Parent from './components/Parent'
import Form from './components/Form'
import './App.css'

interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}

function App() {
  const [subs, setSubs] = useState<AppState['subs']>([])

  useEffect(() => {
    setSubs(initialSubs)
  }, [])

  return (
    <>
      <h1>TypeScript + React</h1>
      <List subs={subs}/>
      <Parent subs={subs}>
        child
      </Parent>
      <Form />
    </>
  )
}

export default App
