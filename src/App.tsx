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
import PlanetsPage from './pages/PlanetsPage'
import PlanetPage from './pages/PlanetPage'


const App = () => {
  return (
    <div id="App">
        <Navigation/>
        <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/films">
            <Route path="" element={<FilmsPage />} />
            <Route path=':id' element={<FilmPage />} />
          </Route>
          
          <Route path="/people">
            <Route path="" element={<PeoplePage/>} />
            <Route path=':id' element={<PersonPage />} />
          </Route>
          
          <Route path="/planets">
            <Route path="" element={<PlanetsPage/>} />
            <Route path=':id' element={<PlanetPage />} />
          </Route>
          
          <Route path="/*" element={<NotFound />} /> 

          {/* <Route></Route> Other Resources...*/}
        </Routes>
        </Container>
    </div>
  )
}
export default App