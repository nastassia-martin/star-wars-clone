import React from "react"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import ListGroup from "react-bootstrap/ListGroup"
import Row from "react-bootstrap/Row"
import { Link } from "react-router-dom"
import { SW_StarshipsResponse } from "../types"

interface IProps {
	res: SW_StarshipsResponse
}

const Species: React.FC<IProps> = ({ res }) => {
	if (res.total == 0) {
		return <p>Nothing found!</p>
	}

	return (
		<>
			<p>
				Showing {res.from} to {res.to} of all {res.total} starships.
			</p>
			<Container className="p-4">
				<Row className="g-4">
					{res.data.map((d) => (
						<Card key={d.id} as={Link} to={`/starships/${d.id}`}>
							<Card.Body>
								<Card.Title>{d.name}</Card.Title>
								<ListGroup>
									<ListGroup.Item>Model: {d.model}</ListGroup.Item>
									<ListGroup.Item>
										Starships Class: {d.starship_class}
									</ListGroup.Item>
									<ListGroup.Item>
										Manufacturer: {d.manufacturer}
									</ListGroup.Item>
									<ListGroup.Item>
										Cost in credits: {d.cost_in_credits}
									</ListGroup.Item>
									<ListGroup.Item>
										Featured in: {d.films_count} films
									</ListGroup.Item>
									<ListGroup.Item>Pilot Count: {d.pilots_count}</ListGroup.Item>
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
