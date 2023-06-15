import React from "react"
import { Link } from "react-router-dom"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import ListGroup from "react-bootstrap/ListGroup"
import Row from "react-bootstrap/Row"
import { SW_PersonResponse } from "../types"

interface IProps {
	person: SW_PersonResponse
}

const Person: React.FC<IProps> = ({ person }) => {
	return (
		<Container className="m-3">
			<Row className="g-4 mb-3">
				<Card className="p-3" key={person.id}>
					<Card.Body>
						<Card.Title>{person.name}</Card.Title>
						<Card.Text>Born: {person.birth_year}</Card.Text>
						<Card.Text as={Link} to={`/planets/${person.homeworld.id}`}>
							Homeworld: {person.homeworld.name}
						</Card.Text>
					</Card.Body>
					<Accordion>
						{person.films.length > 0 && (
							<Accordion.Item eventKey={String(person.films)}>
								<Accordion.Header>Films</Accordion.Header>
								<Accordion.Body>
									<ListGroup className="filmsList">
										{person.films.map((film) => (
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
						{person.species.length > 0 && (
							<Accordion.Item eventKey={String(person.species)}>
								<Accordion.Header>Species</Accordion.Header>
								<Accordion.Body>
									<ListGroup className="speciesList">
										{person.species.map(
											(
												speci // this is a joke
											) => (
												<ListGroup.Item
													action
													as={Link} // will link to Species page
													key={speci.id}
													to={`/species/${speci.id}`} // will link to Species page
												>
													{speci.name}
												</ListGroup.Item>
											)
										)}
									</ListGroup>
								</Accordion.Body>
							</Accordion.Item>
						)}
						{person.starships.length > 0 && (
							<Accordion.Item eventKey={String(person.starships)}>
								<Accordion.Header>Starships</Accordion.Header>
								<Accordion.Body>
									<ListGroup className="starshipsList">
										{person.starships.map((starship) => (
											<ListGroup.Item
												action
												as={Link} // will link to starships page
												key={starship.id}
												to={`/starships/${starship.id}`} // will link to starships page
											>
												{starship.name}
											</ListGroup.Item>
										))}
									</ListGroup>
								</Accordion.Body>
							</Accordion.Item>
						)}
						{person.vehicles.length > 0 && (
							<Accordion.Item eventKey={String(person.vehicles)}>
								<Accordion.Header>Vehicles</Accordion.Header>
								<Accordion.Body>
									<ListGroup className="vehiclesList">
										{person.vehicles.map((vehicle) => (
											<ListGroup.Item
												action
												as={Link} // will link to vehicle page
												key={vehicle.id}
												to={`/vehicles/${vehicle.id}`} // will link to vehicle page
											>
												{vehicle.name}
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
export default Person
