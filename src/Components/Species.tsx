import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import { Link } from "react-router-dom"
import { SW_SpeciesResponse } from '../types'

interface IProps {
    res: SW_SpeciesResponse
}

const Species:React.FC <IProps> = ({res}) => {
    if (res.total == 0){
        return <p>Nothing found!</p>
    }

  return (
        <>
            <p>Showing {res.from} to {res.to} of all {res.total} species.</p>
            <Container className="p-4">
                    <Row  className="g-4">
                        {res.data.map(d => (
                            <Card
                            key={d.id}
                            as={Link}
                            to={`/species/${d.id}`}
                            >
                                <Card.Body>
                                    <Card.Title>{d.name}</Card.Title>
                                        <ListGroup>
                                            {d.homeworld && (
                                            <ListGroup.Item>
                                            Homeworld: {d.homeworld.name}
                                        </ListGroup.Item>
                                            )}
                                           <ListGroup.Item>
                                                Language: {d.language}
                                            </ListGroup.Item>
                                             <ListGroup.Item>
                                            Featured in: {d.films_count} films
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                               Famous characters: {d.people_count}
                                            </ListGroup.Item> 
                                        </ListGroup>
                                </Card.Body>
                            </Card>
                        ))}
                    </Row>
                </Container>
        </>
  )
}

export default Species
