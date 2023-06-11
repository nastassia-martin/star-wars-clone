import Container from 'react-bootstrap/Container'
import { Routes, Route } from 'react-router-dom'
import './assets/scss/App.scss'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import FilmsPage from './pages/FilmsPage'
import FilmPage from './pages/FilmPage'
import PeoplePage from './pages/PeoplePage'
import PersonPage from './pages/PersonPage'

const App = () => {
  return (
    <div id="App">
        <Navigation/>
        <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route></Route> // Main Search Page */}
          <Route path="/*" element={<NotFound />} /> 
          <Route path="/films" element={<FilmsPage />} />
          <Route path='/films/:id' element={<FilmPage />} />
          <Route path="/people" element={<PeoplePage/>} />
          <Route path='/people/:id' element={<PersonPage />} />

          {/* <Route></Route> Other Resources...*/}
        </Routes>
        </Container>
    </div>
  )
}
export default App