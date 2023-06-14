import React from 'react'
import { Link } from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import { SW_StarshipResponse } from '../types'

interface IProps {
    starship: SW_StarshipResponse
}

const Starship:React.FC<IProps> = ({starship}) => {
    return (
        <Container className="m-3">
            <Row className="g-4 mb-3">
                <Card className='p-3' key={starship.id}>
                <Card.Body>
                    <Card.Title>{starship.name}</Card.Title>
                    <Card.Text>Classification: {starship.model}</Card.Text>
                    <Card.Text>Starship Class: {starship.starship_class}</Card.Text>
                     <Card.Text>Manufacturer: {starship.manufacturer}</Card.Text>
                     <Card.Text>Cost in credits: {starship.cost_in_credits}</Card.Text>
                    <Card.Text>Length: {starship.length}</Card.Text>
                    <Card.Text>Crew: {starship.crew}</Card.Text>
                    <Card.Text>Passengers: {starship.passengers}</Card.Text>
                    <Card.Text>Max atmosphering speed: {starship.max_atmosphering_speed}</Card.Text>
                    <Card.Text>MGLT: {starship.MGLT}</Card.Text>
                    <Card.Text>Cargo Capacity: {starship.cargo_capacity}</Card.Text>
                    <Card.Text>Consumables: {starship.consumables}</Card.Text>
                </Card.Body>
                <Accordion>
                    {starship.films.length > 0 && (
                        <Accordion.Item eventKey={String(starship.films)}>
                            <Accordion.Header>Films</Accordion.Header>
                            <Accordion.Body>
                            <ListGroup className='filmsList'>
                                {starship.films.map(film => (
                                    <ListGroup.Item
                                        action
                                        as={Link} // will link to films page
                                        key={film.id}
                                        to={`/films/${film.id}`} // will link to film page
                                    >{film.title}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                    )}
                    {starship.pilots.length > 0 && (
                        <Accordion.Item eventKey={String(starship.pilots)}>
                            <Accordion.Header>Pilots</Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup className='pilotsList'>
                                        {starship.pilots.map(pilot => ( // this is a joke
                                           <ListGroup.Item
                                               action
                                               as={Link} // will link to People page
                                               key={pilot.id}
                                               to={`/people/${pilot.id}`} // will link to person page
                                           >{pilot.name}
                                           </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Accordion.Body>
                        </Accordion.Item>
                    )}
                </Accordion>
                </Card>
            </Row>
        </Container>
    )
}
export default Starship