import { useEffect, useState } from "react"
import { SW_PeopleResponse } from "../types"
import * as StarWarsAPI from '../services/StarWarsAPI'

import ErrorHandling from '../components/ErrorHandling'
import Loading from '../components/Loading'
import Pagination from "../components/Pagination"
import People from "../components/People"
import { useSearchParams } from "react-router-dom"

const PeoplePage = () => {
    const [error, setError] = useState<string|null>(null)
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState<SW_PeopleResponse | null>(null)
    const [searchParams, setSearchParams] = useSearchParams()
    // get "page=" from URL Search Params
    const [page, setPage] = useState(Number(searchParams.get("page") || 1))

    //get all people req
    
    const getPeople = async () =>{
        setError(null) // null prev result
        setLoading(true) // load whilst fetching data
        setResult(null)
        try {
            // make req 
            const res = await StarWarsAPI.getAllPeople(page) 
            // store the info in a state
            setResult(res)
            setSearchParams({ page: String(page) })
            } catch (error: any){
            setError(error.message)
            } finally{
            setLoading(false) //remove if data is fetched or an error is displayed
        }       
    }
    // fetch data when component is mounted, and fetch in case there is a change in page 
    useEffect(() => {
        getPeople()
        console.log(page)
    }, [page]);

    

    return (
        <>
            {error && <ErrorHandling error={error} />}
            {loading && <Loading/>}
            {result && (
                <>
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