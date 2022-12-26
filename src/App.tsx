import { useEffect, useRef, useState } from 'react'
import { Sub } from './types'
import List from './components/List'
import initialSubs from '../data/subs.json'
import Parent from './components/Parent'
import Form from './components/Form'
import './App.css'

interface AppState {
  subs: Sub[]
  newSubsNumber: number
}

function App() {
  const [subs, setSubs] = useState<AppState['subs']>([])
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSubs(initialSubs)
  }, [])

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
  }

  return (
    <>
      <h1>TypeScript + React</h1>
      <List subs={subs}/>
      <Form onNewSub={handleNewSub} />

      <div ref={divRef}>
        <h2>UseRef Example</h2>
      </div>

      <Parent subs={subs}>
        child
      </Parent>
    </>
  )
}

export default App
