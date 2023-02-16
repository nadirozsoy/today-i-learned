import Header from './components/Header/Header'
import MainCategory from './components/Main/MainCategory/MainCategory'
import Section from './components/Main/Section/Section'
import NewFactForm from './components/NewFactForm/NewFactForm'
import './scss/main.scss'

const App = () => {
  return (
    <>
      <div className="container">
        <Header />
        <NewFactForm />
        <main className="main">
          <MainCategory />
          <Section />
        </main>
      </div>
    </>
  )
}

export default App
