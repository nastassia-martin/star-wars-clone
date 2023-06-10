import { useEffect, useState } from "react"
import { SW_PeopleResponse } from "../types"
import * as StarWarsAPI from '../services/StarWarsAPI'

import ErrorHandling from '../components/ErrorHandling'
import Loading from '../components/Loading'
import Pagination from "../components/Pagination"

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import { Link } from "react-router-dom"

const PeoplePage = () => {
    const [error, setError] = useState<string|null>(null)
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState<SW_PeopleResponse | null>(null)
    const [page, setPage] = useState(1)

    //get all people req
    const getPeople = async (pge = 1) =>{
        setError(null) // null prev result
        setLoading(true) // load whilst fetching data
        setResult(null)

        try {
            // make req 
            const res = await StarWarsAPI.getAllPeople(pge) 
            console.log(res)
            // store the info in a state
            setResult(res)
            } catch (error: any){
            setError(error.message)
            } finally{
            setLoading(false) //remove if data is fetched or an error is displayed
        }       
        // setPage(1)
    }
    // fetch data when component is mounted, and fetch in case there is a change in page 
    useEffect( ()=> {
        getPeople(page)
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
                                    <Card.Title>{d.name}</Card.Title>
                                        {/* <Card.Text>Summary:</Card.Text> */}
                                        <Card.Text className="text-truncate">
                                            {d.eye_color}
                                        </Card.Text>
                                        
                                        <ListGroup>
                                            <ListGroup.Item>
                                                Character count: {d.hair_color}
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                Release Date: {d.films}
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                Directed by: {d.height}
                                            </ListGroup.Item>
                                        </ListGroup>
                                </Card.Body>
                            </Card>
                        ))}
                    </Row>
                </Container>
                   
                    <Pagination
                        page={page}
                        onPreviousPage={() => setPage(prevValue => prevValue - 1)}
                        onNextPage={() => setPage(prevValue => prevValue + 1)} 
                        currentPage={result.current_page} 
                        lastPage={result.last_page} 
                />
                </>
            )}
        </>
    )
}

export default PeoplePage