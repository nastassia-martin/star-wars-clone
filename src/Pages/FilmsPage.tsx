import  Button  from "react-bootstrap/Button"
import Card from 'react-bootstrap/Card'
import Container from "react-bootstrap/Container"
import  Form  from "react-bootstrap/Form"
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { SW_FilmsResponse } from "../types"
import * as StarWarsAPI from '../services/StarWarsAPI'
import Loading from '../components/Loading'
import ErrorHandling from '../components/ErrorHandling'
import Pagination from "../components/Pagination"


const FilmsPage = () => {
    const [error, setError] = useState<string|null>(null)
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState<SW_FilmsResponse | null>(null)
    const [page, setPage] = useState(1)

    //get all films req
    const getFilms = async (pge = 1) =>{
        setError(null) // null prev result
        setLoading(true) // load whilst fetching data
        setResult(null)

        try {
            // make req 
            const res = await StarWarsAPI.getAllFilms(pge) 
            console.log(res)
            // store the info in a state
            setResult(res)
            } catch (error: any){
            setError(error.message)
            } finally{
            setLoading(false) //remove if data is fetched or an error is displayed
        }       
        setPage(1)
    }
    // fetch data when component is mounted, and fetch in case there is a change in page 
    useEffect( ()=> {
        getFilms(page)
    }, [page])

return (
        <>

        {error && <ErrorHandling error={error} />}
        {loading && <Loading/>}
        {result && (
            <>
                <p>Showing {result.total} of {result.to} films found!</p>
                <Container className="p-4">
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
                    <Button className="mb-3 ml-3" variant="primary">Go to Home Page</Button>
                </Link>
                <Pagination 
                result={result}
                page={page}
                onPreviousPage={() => setPage(prevValue => prevValue - 1) }
                onNextPage={()=> setPage(prevValue => prevValue + 1) }
                />
                {/* <div className="d-flex justify-content-between align-items-center">
                    <div className="prev">
                        <Button
                            disabled={page <= 1} // IF PAGE IS ON THE FIRST PAGE YOU CANT GO BACK
                            onClick={() => { setPage(prevValue => prevValue - 1) }} //GO BACK BY 1 PAGE
                            variant="primary"
                        >Previous Page</Button>
                        <div className="page">Page {result.current_page} of {result.last_page}</div>
                        <div className="next">
                            <Button
                                disabled={page + 1 >= result.last_page} //IF PAGE IS ON THE LAST PAGE YOU CANT GO BACK
                                onClick={() => { setPage(prevValue => prevValue + 1) }} //GO forward BY 1 PAGE
                                variant="primary"
                            >Next Page</Button>
                        </div>
                    </div>
                </div> */}
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
