import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

import { Link } from "react-router-dom"

const HomePage = () => {
	return (
		<Container className="m-3">
			<h1>Welcome Traveller!</h1>
			<Row md={2} sm={1} className="g-4">
				<Col>
					<Card>
						<Card.Body>
							<Card.Title>Films</Card.Title>
							<Card.Text>Browse films from the galaxy</Card.Text>
							<Link to={"/films"}>
								<Button variant="dark">Go to Films</Button>
							</Link>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card className="">
						<Card.Body>
							<Card.Title>People</Card.Title>
							<Card.Text>Browse characters from the galaxy</Card.Text>
							<Link to={"/people"}>
								<Button variant="dark">Go to People</Button>
							</Link>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card>
						<Card.Body>
							<Card.Title>Planets</Card.Title>
							<Card.Text>Browse planets from the galaxy</Card.Text>
							<Link to={"/planets"}>
								<Button variant="dark">Go to Planets</Button>
							</Link>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card>
						<Card.Body>
							<Card.Title>Species</Card.Title>
							<Card.Text>Browse species from the galaxy</Card.Text>
							<Link to={"/species"}>
								<Button variant="dark">Go to Species</Button>
							</Link>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card>
						<Card.Body>
							<Card.Title>Starships</Card.Title>
							<Card.Text>Browse species from the galaxy</Card.Text>
							<Link to={"/starships"}>
								<Button variant="dark">Go to Starships</Button>
							</Link>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card>
						<Card.Body>
							<Card.Title>Vehicles</Card.Title>
							<Card.Text>Browse species from the galaxy</Card.Text>
							<Link to={"/vehicles"}>
								<Button variant="dark">Go to Vehicles</Button>
							</Link>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	)
}
export default HomePage
