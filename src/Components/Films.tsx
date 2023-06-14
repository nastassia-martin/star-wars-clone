import React from 'react'

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import { Link } from "react-router-dom"
import { SW_FilmsResponse } from '../types'

interface IProps {
    res: SW_FilmsResponse
}


const Films: React.FC<IProps> = ({res}) => {

    if (res.total == 0){
        return <p>Nothing found!</p>
    }
  return (
    <>
        <p>Showing {res.from} to {res.to} of all {res.total} films</p>
                <Container className="p-4">
                    <Row  className="g-4">
                        {res.data.map(d=> (
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
    </>
  )
}

export default Films
