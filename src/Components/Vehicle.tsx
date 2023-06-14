import React from 'react'
import { Link } from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import { SW_VehicleResponse } from '../types'

interface IProps {
    vehicle: SW_VehicleResponse
}

const Starship:React.FC<IProps> = ({vehicle}) => {
    return (
        <Container className="m-3">
            <Row className="g-4 mb-3">
                <Card className='p-3' key={vehicle.id}>
                <Card.Body>
                    <Card.Title>{vehicle.name}</Card.Title>
                    <Card.Text>Model: {vehicle.model}</Card.Text>
                    <Card.Text>Vehicle Class: {vehicle.vehicle_class}</Card.Text>
                     <Card.Text>Manufacturer: {vehicle.manufacturer}</Card.Text>
                     <Card.Text>Cost in credits: {vehicle.cost_in_credits}</Card.Text>
                    <Card.Text>Length: {vehicle.length}</Card.Text>
                    <Card.Text>Crew: {vehicle.crew}</Card.Text>
                    <Card.Text>Passengers: {vehicle.passengers}</Card.Text>
                    <Card.Text>Max atmosphering speed: {vehicle.max_atmosphering_speed}</Card.Text>
                    <Card.Text>Cargo Capacity: {vehicle.cargo_capacity}</Card.Text>
                    <Card.Text>Consumables: {vehicle.consumables}</Card.Text>
                </Card.Body>
                <Accordion>
                    {vehicle.films.length > 0 && (
                        <Accordion.Item eventKey={String(vehicle.films)}>
                            <Accordion.Header>Films</Accordion.Header>
                            <Accordion.Body>
                            <ListGroup className='filmsList'>
                                {vehicle.films.map(film => (
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
                    {vehicle.pilots.length > 0 && (
                        <Accordion.Item eventKey={String(vehicle.pilots)}>
                            <Accordion.Header>Pilots</Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup className='pilotsList'>
                                        {vehicle.pilots.map(pilot => ( // this is a joke
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