import React from "react"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import ListGroup from "react-bootstrap/ListGroup"
import Row from "react-bootstrap/Row"
import { Link } from "react-router-dom"
import { SW_PlanetsResponse } from "../types"

interface IProps {
	res: SW_PlanetsResponse
}

const Planets: React.FC<IProps> = ({ res }) => {
	if (res.total == 0) {
		return <p>Nothing found!</p>
	}

	return (
		<>
			<p>
				Showing {res.from} to {res.to} of all {res.total} planets.
			</p>
			<Container className="p-4">
				<Row className="g-4">
					{res.data.map((d) => (
						<Card key={d.id} as={Link} to={`/planets/${d.id}`}>
							<Card.Body>
								<Card.Title>{d.name}</Card.Title>
								<ListGroup>
									<ListGroup.Item>Population: {d.population}</ListGroup.Item>
									<ListGroup.Item>
										Featured in: {d.films_count} films
									</ListGroup.Item>
									<ListGroup.Item>Population: {d.population}</ListGroup.Item>
									<ListGroup.Item>
										Famous residents: {d.residents_count}
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

export default Planets
