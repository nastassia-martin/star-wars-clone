import Container from 'react-bootstrap/Container'
import { Routes, Route } from 'react-router-dom'
import './assets/scss/App.scss'
import Navigation from './Components/Navigation'
import HomePage from './Pages/HomePage'
import NotFound from './Pages/NotFound'
import FilmsPage from './Pages/FilmsPage'
import FilmPage from './Pages/FilmPage'

const App = () => {
  return (
    <div id="App">
        <Navigation/>
        <Container>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          {/* <Route></Route> // Main Search Page */}
          <Route path="/*" element={<NotFound />}></Route> 
          <Route path="/films" element={<FilmsPage />}></Route> 
          <Route path='/films/:id' element={<FilmPage />} />
          {/* <Route></Route> People*/}
          {/* <Route></Route> Other Resources...*/}
        </Routes>
        </Container>
    </div>
  )
}
export default App