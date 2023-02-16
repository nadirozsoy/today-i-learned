import { useEffect, useState } from 'react'
import supabase from './database/supabase'
import Header from './components/Header/Header'
import MainCategory from './components/Main/MainCategory/MainCategory'
import Section from './components/Main/Section/Section'
import NewFactForm from './components/NewFactForm/NewFactForm'
import './scss/main.scss'

const App = () => {
  //1. define state var
  const [showForm, setShowForm] = useState(false)

  const [facts, setFacts] = useState([])

  useEffect(() => {
    async function getFacts() {
      const { data: facts, error } = await supabase.from('facts').select('*')
      setFacts(facts)
    }
    getFacts()
  }, [])

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
