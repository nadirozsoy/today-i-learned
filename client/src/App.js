import { useState } from 'react'
import Header from './components/Header/Header'
import MainCategory from './components/Main/MainCategory/MainCategory'
import Section from './components/Main/Section/Section'
import NewFactForm from './components/NewFactForm/NewFactForm'
import './scss/main.scss'

const App = () => {
  //1. define state var
  const [showForm, setShowForm] = useState(false)

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
        {showForm ? <NewFactForm /> : null}

        {/* MAİN */}
        <main className="main">
          <MainCategory />
          <Section />
        </main>
      </div>
    </>
  )
}

export default App
