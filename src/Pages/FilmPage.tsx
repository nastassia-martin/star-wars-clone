import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import * as StarWarsAPI from '../services/StarWarsAPI'
import { FilmResponse } from '../types'
import Accordion from 'react-bootstrap/Accordion';
import  Alert  from 'react-bootstrap/Alert'
import Button  from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'

import Row from 'react-bootstrap/Row'

const FilmPage = () => {
    const [error, setError] = useState<string | null>(null) // error state
    const [loading, setLoading] = useState(true) // loading state
    const [film, setFilm] = useState<FilmResponse | null>(null)
    const { id } = useParams() // for API
    const filmId = Number(id) // for API
    const navigate = useNavigate()


    const getFilm = async (filmId: number) => {
        setError(null)
        setLoading(true)

        try{
            const data = await StarWarsAPI.getFilm(filmId)
            console.log(data)
            setFilm(data)

        } catch (error: any){
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }
    
    useEffect(() => {
        getFilm(filmId)
    }, [filmId])

  return (
    <>
        {error && (
            <Alert variant="warning">
                {error}
                <Link to="/">
                    <Button variant="primary">Go to Home Page</Button>
                </Link>
            </Alert>
        )}
        {loading && <p>😌 Loading...</p>}
        {film && (
            <>
            <Container className="m-3">
                <Row className="g-4 mb-3">
                    <Card className='p-3' key={film.id}>
                        <Card.Body>
                            <Card.Title>{film.title}</Card.Title>
                            <Card.Text>{film.opening_crawl}</Card.Text>
                            <Card.Text>Directed By: {film.director}</Card.Text>
                            <Card.Text>Producers: {film.producer}</Card.Text>
                            <Card.Text>Release Date: {film.release_date}</Card.Text>
                        </Card.Body>
                        <Accordion>
                            <Accordion.Item eventKey={String(film.characters)}>
                                <Accordion.Header>Characters</Accordion.Header>
                                <Accordion.Body>
                                <ListGroup id='charactersList'>
                                    {film.characters.map(character => (
                                        <ListGroup.Item
                                            action
                                            as={Link} // will link to characters page
                                            key={character.id}
                                            to={`/people/${character.id}`} // will link to characters page
                                        >{character.name}
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey={String(film.planets)}>
                                <Accordion.Header>Planets</Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup id='planetsList'>
                                        {film.planets.map(planet => (
                                           <ListGroup.Item
                                               action
                                               as={Link} // will link to characters page
                                               key={planet.id}
                                               to={`/planets/${planet.id}`} // will link to characters page
                                           >{planet.name}
                                           </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey={String(film.species)}>
                                <Accordion.Header>Species</Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup id='speciesList'>
                                        {film.species.map(speci => ( // this is a joke
                                           <ListGroup.Item
                                               action
                                               as={Link} // will link to Species page
                                               key={speci.id}
                                               to={`/species/${speci.id}`} // will link to Species page
                                           >{speci.name}
                                           </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey={String(film.starships)}>
                                <Accordion.Header>Starships</Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup id='starshipsList'>
                                        {film.starships.map(starship => ( // this is a joke
                                           <ListGroup.Item
                                               action
                                               as={Link} // will link to Species page
                                               key={starship.id}
                                               to={`/starships/${starship.id}`} // will link to Species page
                                           >{starship.name}
                                           </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Accordion.Body>

                            </Accordion.Item>
                            <Accordion.Item eventKey={String(film.vehicles)}>
                                <Accordion.Header>Vehicles</Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup id='vehiclesList'>
                                        {film.vehicles.map(vehicle => ( // this is a joke
                                           <ListGroup.Item
                                               action
                                               as={Link} // will link to Species page
                                               key={vehicle.id}
                                               to={`/vehicles/${vehicle.id}`} // will link to Species page
                                           >{vehicle.name}
                                           </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Card>
                </Row>
            </Container>
            {/* // go back button */}
            <div className="nav-back">
                <Button
                    onClick={() => navigate(-1)} 
                    variant="primary"
                >&laquo; Back to films</Button>
            </div>
            </>
        )}           
    </>
  )
}
export default FilmPage