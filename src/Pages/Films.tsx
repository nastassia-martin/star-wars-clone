import  Button  from "react-bootstrap/Button"
import  Form  from "react-bootstrap/Form"
import { Link } from "react-router-dom"



const Films = () => {


    //get all films req


return (
        <>
            <h1>Pick a film</h1>
            <Form>
                <Form.Group className="mb-3" controlId="searchQuery">
                    <Form.Label>Search Query</Form.Label>
                    <Form.Control
                        // onChange={} // SETsearch the user enters via e.value
                        placeholder="What film are you looking for?"
                        required
                        type="text"
                        // value={} // search input
                    />			
                </Form.Group>
                <div className='d-flex jusify-content-end'>
                    <Button
                        // disabled={!searchInput.trim().length}
                        variant="success"
                        type="submit"
                    >Search</Button>
                </div>
            </Form>
            <Link to="/">
                <Button variant="primary">Go to Home Page</Button>
            </Link>
        </>
    )   
}
export default Films