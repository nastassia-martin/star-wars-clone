import Container from 'react-bootstrap/Container'
import { Routes, Route } from 'react-router-dom'

import './assets/scss/App.scss'

const App = () => {
  return (
    <div id="App">
        {/* <Navigation/> // add navigation bar */}
        <Container>
        <Routes>
          {/* <Route path="/" element={<HomePage /}></Route> // Home page */}
          {/* <Route></Route> // Main Search Page */}
          {/* <Route></Route> Not Found */}
          {/* <Route></Route> Films*/} 
          {/* <Route></Route> Characters*/}
          {/* <Route></Route> Other Resources...*/}
        </Routes>
        </Container>
    </div>
  )
}
export default App