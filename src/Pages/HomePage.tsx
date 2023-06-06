import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import {Link, NavLink} from 'react-router-dom'
import * as StarWarsAPI from '../services/StarWarsAPI'
import { useEffect, useState } from 'react';
import { SW_SearchResponse } from '../Types';


const HomePage = () => {
    // const [resource, setResource] = useState('')
    // const [data, setData] = useState<SW_SearchResponse|null>(null)

    // useEffect(() => {
	// 	const fetchData = async () => {
	// 		if (!resource) {
	// 			return
	// 		}
	// 		setData(null)
	// 		try {
	// 			const payload = await StarWarsAPI.get(resource)
    //             console.log(payload)
    //             setData(payload)
	// 		} catch (e: any) {
	// 		} finally {
	// 		}
	// 	}
    //     console.log(data) // doesn't get called
	// 	// call function
	// 	fetchData()
	// }, [resource])
    // console.log(data) // null

// when user click on Films, a get req is trigged for SWAPI/films
    return ( 
        <Container>
            <h1>Welcome Traveller!</h1>
            <p>What are you looking for?</p> 
            
            {/* move to component */}
            
            <Card style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>Films</Card.Title>
                    <Card.Text>
                        Are you looking to do a deep dive into the galaxy?
                    </Card.Text>
                    <Link to={'/films'}>
                        <Button 
                        // variant="primary" 
                        // onClick={() => setResource('films')}
                        // as={Link}
                        >
                        Go to Films</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Container>    
    
  );
}


        

//             <Link to="/people">
//                 <Button variant="primary">Go to Characters</Button>
//             </Link>
       
//     )
// }

export default HomePage