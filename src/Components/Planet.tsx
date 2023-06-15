import React from "react"
import { Link } from "react-router-dom"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import ListGroup from "react-bootstrap/ListGroup"
import Row from "react-bootstrap/Row"
import { SW_PlanetResponse } from "../types"

interface IProps {
	planet: SW_PlanetResponse
}

const Person: React.FC<IProps> = ({ planet }) => {
	return (
		<Container className="m-3">
			<Row className="g-4 mb-3">
				<Card className="p-3" key={planet.id}>
					<Card.Body>
						<Card.Title>{planet.name}</Card.Title>
						<Card.Text>Rotation period: {planet.rotation_period}</Card.Text>
						<Card.Text>Orbital period: {planet.orbital_period}</Card.Text>
						<Card.Text>Diameter: {planet.diameter}</Card.Text>
						<Card.Text>Climate: {planet.climate}</Card.Text>
						<Card.Text>Gravity: {planet.gravity}</Card.Text>
						<Card.Text>Terrain: {planet.terrain}</Card.Text>
						<Card.Text>Surface Water: {planet.surface_water}</Card.Text>
						<Card.Text>Population: {planet.population}</Card.Text>
					</Card.Body>
					<Accordion>
						{planet.films.length > 0 && (
							<Accordion.Item eventKey={String(planet.films)}>
								<Accordion.Header>Films</Accordion.Header>
								<Accordion.Body>
									<ListGroup className="filmsList">
										{planet.films.map((film) => (
											<ListGroup.Item
												action
												as={Link} // will link to films page
												key={film.id}
												to={`/films/${film.id}`} // will link to characters page
											>
												{film.title}
											</ListGroup.Item>
										))}
									</ListGroup>
								</Accordion.Body>
							</Accordion.Item>
						)}
						{planet.residents.length > 0 && (
							<Accordion.Item eventKey={String(planet.residents)}>
								<Accordion.Header>People</Accordion.Header>
								<Accordion.Body>
									<ListGroup className="peopleList">
										{planet.residents.map(
											(
												resident // this is a joke
											) => (
												<ListGroup.Item
													action
													as={Link} // will link to Character page
													key={resident.id}
													to={`/people/${resident.id}`} // will link to Species page
												>
													{resident.name}
												</ListGroup.Item>
											)
										)}
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
export default Person
