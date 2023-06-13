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
    const [searchParams, setSearchParams] = useSearchParams({ search: "", page: "1" })

    // get "page=" or default value of 1
    const page = (Number(searchParams.get("page") || 1))
    // get "search=" from URL Search Params
	const search = searchParams.get("search") || ""
  
    //get all people req
    const getPeople = async (searchQuery: string, searchPage = 1) =>{
        setError(null) // null prev result
        setLoading(true) // load whilst fetching data
        setResult(null)

        try {
            // make req 
            const res = await StarWarsAPI.getAllPeople(searchQuery, searchPage) 
            // store the info in a state
            setResult(res)
        } catch (error: any) {
            setError(error.message)
        } finally {
            setLoading(false) //remove if data is fetched OR if an error is displayed
        }       
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // this prevents user sbmitting a blank form even if they disable the required
        if (!searchInput.trim().length) {
            return
        }


        //set input value as query in search Params & set page to 1
        setSearchParams({ search: searchInput, page: "1" })       
        getPeople(searchInput, page)
    }
    // fetch data when component is mounted, and fetch in case there is a change in page 
    useEffect(() => {
        getPeople(search, page)
    }, [search, page]);

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
                        onPreviousPage={() => setSearchParams({search: searchInput, page: String(page-1)} )}
                        onNextPage={() => setSearchParams({search: searchInput, page: String(page+1)} )} 
                        currentPage={result.current_page} 
                        lastPage={result.last_page} 
                    />
                </>
            )} 
        </>
    )
}

export default PeoplePage