import { useEffect, useState } from "react"
import { SW_PeopleResponse } from "../types"
import * as StarWarsAPI from '../services/StarWarsAPI'

import ErrorHandling from '../components/ErrorHandling'
import Loading from '../components/Loading'
import Pagination from "../components/Pagination"
import People from "../components/People"
import { useSearchParams } from "react-router-dom"

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


const PeoplePage = () => {
    const [error, setError] = useState<string|null>(null)
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState<SW_PeopleResponse | null>(null)
    const [searchInput, setSearchInput] = useState("")
    const [searchParams, setSearchParams] = useSearchParams()
    // get "page=" from URL Search Params
    const [page, setPage] = useState(Number(searchParams.get("page") || 1))
    // get "search=" from URL Search Params
	const search = searchParams.get("search")
   console.log(search)
    //get all people req
    const getPeople = async (searchQuery: string, searchPage = 1) =>{
        setError(null) // null prev result
        setLoading(true) // load whilst fetching data
        setResult(null)

        try {
            // make req 
            const res = await StarWarsAPI.getAllPeople(searchQuery, searchPage) 
            // store the info in a state
            console.log(res)
            setResult(res)
            // setSearchParams({ page: String(page), search: searchInput }) // can work here?
            } catch (error: any){
            setError(error.message)
            } finally{
            setLoading(false) //remove if data is fetched or an error is displayed
        }       
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // this prevents user sbmitting a blank form even if they disable the required
        if (!searchInput.trim().length) {
            return
        }
        //reset page state
        setPage(1)

        //set input value as query in search Params
        setSearchParams({ search: searchInput, page: String(page) })       
    }
    // fetch data when component is mounted, and fetch in case there is a change in page 
    useEffect(() => {
        if(!search){
            return
        }
        getPeople(search, page)
        console.log(page)
    }, [page, search]);

    

    return (
        <>
            {error && <ErrorHandling error={error} />}
            {loading && <Loading/>}

            <h1>narrow your search: </h1>
            <Form className="mb-4" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="searchQuery">
                        <Form.Label>Search Query</Form.Label>
                        <Form.Control
                            onChange={e => setSearchInput(e.target.value)} // SETsearch the user enters via e.value
                            placeholder="Narrow your search"
                            required
                            type="text"
                            value={searchInput} // search input
                        />			
                    </Form.Group>
                    <div className='d-flex jusify-content-end'>
                        <Button
                            disabled={!searchInput.trim().length}
                            variant="success"
                            type="submit"
                        >Search</Button>
                    </div>
            </Form>
            {result && (
                <>

                {search && (
                    <p>hello {search} here is your info: {result.total}</p>
                )}
                    <People res={result} />
                    <Pagination
                        page={result.current_page}
                        onPreviousPage={() => setPage(prevValue => prevValue - 1)}
                        onNextPage={() => setPage(prevValue => prevValue + 1)} 
                        currentPage={result.current_page} 
                        lastPage={result.last_page} 
                    />
                </>
            )}

            
                
        </>
    )
}

export default PeoplePage