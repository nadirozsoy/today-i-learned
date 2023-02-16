import { useState } from 'react'
import Header from './components/Header/Header'
import MainCategory from './components/Main/MainCategory/MainCategory'
import Section from './components/Main/Section/Section'
import NewFactForm from './components/NewFactForm/NewFactForm'
import './scss/main.scss'

const initialFacts = [
  {
    id: 1,
    text: 'React is being developed by Meta (formerly facebook)',
    source: 'https://opensource.fb.com/',
    category: 'technology',
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: 'Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%',
    source:
      'https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids',
    category: 'society',
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: 'Lisbon is the capital of Portugal',
    source: 'https://en.wikipedia.org/wiki/Lisbon',
    category: 'society',
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
]

const App = () => {
  //1. define state var
  const [showForm, setShowForm] = useState(false)

  const [facts, setFacts] = useState(initialFacts)

  return (
    <>
      <div className="container">
        {/* HEADER */}
        <Header
          showForm={showForm}
          setShowForm={setShowForm}
        />

        {/* FORM */}
        {/*2. use state variable */}
        {showForm ? (
          <NewFactForm
            setFacts={setFacts}
            setShowForm={setShowForm}
          />
        ) : null}

        {/* MAİN */}
        <main className="main">
          <MainCategory />
          <Section facts={facts} />
        </main>
      </div>
    </>
  )
}

export default App
