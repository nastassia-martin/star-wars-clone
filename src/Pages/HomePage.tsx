import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import {Link} from 'react-router-dom'

const HomePage = () => {
    return (  
        <Container>
            <h1>Welcome Traveller!</h1>
            <p>What are you looking for?</p>
            <Link to="/search">
                <Button variant="primary">Go to search</Button>
            </Link>
        </Container>    
    )
}

export default HomePage