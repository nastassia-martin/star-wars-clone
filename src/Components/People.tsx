import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import { Link } from "react-router-dom"
import { SW_PeopleResponse } from '../types'

interface IProps {
    res: SW_PeopleResponse
}

const People:React.FC <IProps> = ({res}) => {
    if (res.total == 0){
        return <p>Nothing found!</p>
    }

  return (
        <>
            <p>Showing characters {res.from} to {res.to} of {res.total} characters.</p>
                <Container className="p-4">
                    <Row  className="g-4">
                        {res.data.map(d => (
                            <Card
                            key={d.id}
                            as={Link}
                            to={`/people/${d.id}`}
                            >
                                <Card.Body>
                                    <Card.Title>{d.name}</Card.Title>
                                        <ListGroup>
                                            <ListGroup.Item>
                                                HomeWorld: {d.homeworld.name}
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                Birth year: {d.birth_year}
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                Films Count: {d.films_count}
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

export default People
