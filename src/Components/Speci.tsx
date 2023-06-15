import React from "react"
import { Link } from "react-router-dom"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import ListGroup from "react-bootstrap/ListGroup"
import Row from "react-bootstrap/Row"
import { SW_SpeciResponse } from "../types"

interface IProps {
	speci: SW_SpeciResponse
}

const Person: React.FC<IProps> = ({ speci }) => {
	return (
		<Container className="m-3">
			<Row className="g-4 mb-3">
				<Card className="p-3" key={speci.id}>
					<Card.Body>
						<Card.Title>{speci.name}</Card.Title>
						<Card.Text>Classification: {speci.classification}</Card.Text>
						<Card.Text>Designation: {speci.designation}</Card.Text>
						<Card.Text>Average height: {speci.average_height}</Card.Text>
						<Card.Text>Average lifespan: {speci.average_lifespan}</Card.Text>
						<Card.Text>Possible eye colours: {speci.eye_colors}</Card.Text>
						<Card.Text>Possible hair colours: {speci.hair_colors}</Card.Text>
						<Card.Text>Possible skin colours: {speci.skin_colors}</Card.Text>
						<Card.Text>Language: {speci.language}</Card.Text>
						{speci.homeworld && (
							<Card.Text as={Link} to={`/planets/${speci.homeworld.id}`}>
								Homeworld: {speci.homeworld.name}
							</Card.Text>
						)}
					</Card.Body>
					<Accordion>
						{speci.films.length > 0 && (
							<Accordion.Item eventKey={String(speci.films)}>
								<Accordion.Header>Films</Accordion.Header>
								<Accordion.Body>
									<ListGroup className="filmsList">
										{speci.films.map((film) => (
											<ListGroup.Item
												action
												as={Link} // will link to films page
												key={film.id}
												to={`/films/${film.id}`} // will link to film page
											>
												{film.title}
											</ListGroup.Item>
										))}
									</ListGroup>
								</Accordion.Body>
							</Accordion.Item>
						)}
						{speci.people.length > 0 && (
							<Accordion.Item eventKey={String(speci.people)}>
								<Accordion.Header>Species</Accordion.Header>
								<Accordion.Body>
									<ListGroup className="speciesList">
										{speci.people.map(
											(
												person // this is a joke
											) => (
												<ListGroup.Item
													action
													as={Link} // will link to People page
													key={person.id}
													to={`/people/${person.id}`} // will link to person page
												>
													{person.name}
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
