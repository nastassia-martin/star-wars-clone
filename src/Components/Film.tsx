import React from "react"
import { Link } from "react-router-dom"

import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import ListGroup from "react-bootstrap/ListGroup"
import Row from "react-bootstrap/Row"
import { SW_FilmResponse } from "../types"

interface IProps {
	film: SW_FilmResponse
}

const Film: React.FC<IProps> = ({ film }) => {
	return (
		<Container className="m-3">
			<Row className="g-4 mb-3">
				<Card className="p-3" key={film.id}>
					<Card.Body>
						<Card.Title>{film.title}</Card.Title>
						<Card.Text>{film.opening_crawl}</Card.Text>
						<Card.Text>Directed By: {film.director}</Card.Text>
						<Card.Text>Producers: {film.producer}</Card.Text>
						<Card.Text>Release Date: {film.release_date}</Card.Text>
					</Card.Body>
					<Accordion>
						{film.characters.length > 0 && (
							<Accordion.Item eventKey={String(film.characters)}>
								<Accordion.Header>Characters</Accordion.Header>
								<Accordion.Body>
									<ListGroup className="charactersList">
										{film.characters.map((character) => (
											<ListGroup.Item
												action
												as={Link} // will link to characters page
												key={character.id}
												to={`/people/${character.id}`} // will link to characters page
											>
												{character.name}
											</ListGroup.Item>
										))}
									</ListGroup>
								</Accordion.Body>
							</Accordion.Item>
						)}
						{film.planets.length > 0 && (
							<Accordion.Item eventKey={String(film.planets)}>
								<Accordion.Header>Planets</Accordion.Header>
								<Accordion.Body>
									<ListGroup className="planetsList">
										{film.planets.map((planet) => (
											<ListGroup.Item
												action
												as={Link} // will link to characters page
												key={planet.id}
												to={`/planets/${planet.id}`} // will link to characters page
											>
												{planet.name}
											</ListGroup.Item>
										))}
									</ListGroup>
								</Accordion.Body>
							</Accordion.Item>
						)}
						{film.species.length > 0 && (
							<Accordion.Item eventKey={String(film.species)}>
								<Accordion.Header>Species</Accordion.Header>
								<Accordion.Body>
									<ListGroup className="speciesList">
										{film.species.map(
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
						{film.starships.length > 0 && (
							<Accordion.Item eventKey={String(film.starships)}>
								<Accordion.Header>Starships</Accordion.Header>
								<Accordion.Body>
									<ListGroup className="starshipsList">
										{film.starships.map((starship) => (
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
						{film.vehicles.length > 0 && (
							<Accordion.Item eventKey={String(film.vehicles)}>
								<Accordion.Header>Vehicles</Accordion.Header>
								<Accordion.Body>
									<ListGroup className="vehiclesList">
										{film.vehicles.map((vehicle) => (
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
export default Film
