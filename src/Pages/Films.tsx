import  Button  from "react-bootstrap/Button"
import  Form  from "react-bootstrap/Form"
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Container from "react-bootstrap/Container"
import { Link } from "react-router-dom"
import * as StarWarsAPI from '../services/StarWarsAPI'
import { useEffect, useState } from "react"
import { SW_SearchResponse } from "../Types"


const Films = () => {

    const [result, setResult] = useState<SW_SearchResponse | null>(null)

    //get all films req
    const getFilms = async () =>{
        setResult(null)

        try{
            // make req & enter param
            const res = await StarWarsAPI.get('films') // should be dynamic? 
            console.log(res) //
            // store the info in a state
            setResult(res)
        } catch (error){
            console.log(error)
        }       
        //need to output response
    }
    // fetch data when component is mounted, only once
    useEffect( ()=> {
        getFilms()
    }, [])

return (
        <>
        {result && (
            <>
                <p>Showing {result.total} of {result.to} films found!</p>
                <Container>
                <Row  className="g-4">
                    {result.data.map(d=> (
                        <Card>
                            <Card.Body>
                                <Card.Title>{d.title}</Card.Title>
                                    <Card.Text>
                                        {d.opening_crawl}
                                    </Card.Text>
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
export default Films