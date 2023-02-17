import { useEffect, useState } from 'react'
import supabase from './database/supabase'
import Header from './components/Header/Header'
import MainCategory from './components/Main/MainCategory/MainCategory'
import Section from './components/Main/Section/Section'
import NewFactForm from './components/NewFactForm/NewFactForm'
import './scss/main.scss'
import Loader from './components/Loader/Loader'

const App = () => {
  //1. define state var
  const [showForm, setShowForm] = useState(false)

  const [facts, setFacts] = useState([])

  const [isLoading, setIsLoading] = useState(false)

  const [currentCategory, setCurrentCategory] = useState('all')

  useEffect(() => {
    async function getFacts() {
      setIsLoading(true)

      let query = supabase.from('facts').select('*')
      if (currentCategory !== 'all')
        query = query.eq('category', currentCategory)

      const { data: facts, error } = await query
        .order('votesInteresting', { ascending: false })
        .limit(100)

      if (!error) setFacts(facts)
      else alert('There was a problem getting data')
      setIsLoading(false)
    }
    getFacts()
  }, [currentCategory])

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
          <MainCategory setCurrentCategory={setCurrentCategory} />
          {isLoading ? <Loader /> : <Section facts={facts} />}
        </main>
      </div>
    </>
  )
}

export default App
