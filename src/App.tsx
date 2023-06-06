import Container from 'react-bootstrap/Container'
import { Routes, Route } from 'react-router-dom'
import './assets/scss/App.scss'
import Navigation from './Components/Navigation'
import HomePage from './Pages/HomePage'
import NotFound from './Pages/NotFound'
import Films from './Pages/Films'

const App = () => {
  return (
    <div id="App">
        <Navigation/>
        <Container>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          {/* <Route></Route> // Main Search Page */}
          <Route path="/*" element={<NotFound />}></Route> 
          <Route path="/films" element={<Films />}></Route> 
          {/* <Route></Route> People*/}
          {/* <Route></Route> Other Resources...*/}
        </Routes>
        </Container>
    </div>
  )
}
export default App