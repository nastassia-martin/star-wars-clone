import Alert from 'react-bootstrap/Alert'
import  Button  from "react-bootstrap/Button"
import  Form  from "react-bootstrap/Form"
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Container from "react-bootstrap/Container"
import { Link } from "react-router-dom"
import * as StarWarsAPI from '../services/StarWarsAPI'
import { useEffect, useState } from "react"
import { SW_SearchResponse } from "../Types"


const FilmsPage = () => {
    const [error, setError] = useState<string|null>(null)
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState<SW_SearchResponse | null>(null)
    

    //get all films req
    const getFilms = async () =>{
        setError(null) // null prev result
        setLoading(true) // load whilst fetching data
        setResult(null)

        try{
            // make req 
            const res = await StarWarsAPI.getAllFilms() 
            //console.log(res) //
            // store the info in a state
            setResult(res)
        } catch (error: any){
            setError(error.message)
        } finally{
            setLoading(false) //remove if data is fetched or an error is displayed
        }       
        //need to output response
    }
    // fetch data when component is mounted, only once
    useEffect( ()=> {
        getFilms()
    }, [])

return (
        <>

        {error && <Alert variant="warning">{error}</Alert>}
        {loading && <p>😌 Loading...</p>}
        {result && (
            <>
                <p>Showing {result.total} of {result.to} films found!</p>
                <Container>
                    <Row  className="g-4">
                        {result.data.map(d=> (
                            <Card
                            key={d.id}
                            as={Link}
                            to={`/films/${d.id}`}
                            >
                                <Card.Body>
                                    <Card.Title>{d.title}</Card.Title>
                                        {/* <Card.Text>Summary:</Card.Text> */}
                                        <Card.Text className="text-truncate">
                                            {d.opening_crawl}
                                        </Card.Text>
                                        
                                        <ListGroup>
                                            <ListGroup.Item>
                                                Character count: {d.characters_count}
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                Release Date: {d.release_date}
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                Directed by: {d.director}
                                            </ListGroup.Item>
                                        </ListGroup>
                                </Card.Body>
                            </Card>
                        ))}
                    </Row>
                </Container>

                <Link to="/">
                    <Button variant="primary">Go to Home Page</Button>
                </Link>
            </>
        )} 
            {/* <h1>Pick a film</h1> */}
                {/* <Form>
                    <Form.Group className="mb-3" controlId="searchQuery">
                        <Form.Label>Search Query</Form.Label>
                        <Form.Control
                            // onChange={} // SETsearch the user enters via e.value
                            placeholder="What film are you looking for?"
                            required
                            type="text"
                            // value={} // search input
                        />			
                    </Form.Group>
                    <div className='d-flex jusify-content-end'>
                        <Button
                            // disabled={!searchInput.trim().length}
                            variant="success"
                            type="submit"
                        >Search</Button>
                    </div>
                </Form> */}

        </>
    )   
}
export default FilmsPage
