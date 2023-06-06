import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <>
            <h1>Sorry! That page couldn't be found</h1>
            <Link to="/">
                <Button variant="primary">Go to Home Page</Button>
            </Link>

        </>
    )
}

export default NotFound
