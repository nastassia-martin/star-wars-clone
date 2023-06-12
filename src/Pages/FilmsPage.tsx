import { useEffect, useState } from "react"
import { SW_FilmsResponse } from "../types"
import * as StarWarsAPI from '../services/StarWarsAPI'

//components
import ErrorHandling from '../components/ErrorHandling'
import Films from "../components/Films"
import Loading from '../components/Loading'
import Pagination from "../components/Pagination"


const FilmsPage = () => {
    const [error, setError] = useState<string|null>(null)
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState<SW_FilmsResponse | null>(null)
    const [page, setPage] = useState(1)


    //get all films req
    const getFilms = async (pge = 1) =>{
        setError(null) // null prev result
        setLoading(true) // load whilst fetching data
        setResult(null)

        try {
            // make req 
            const res = await StarWarsAPI.getAllFilms(pge) 
            // store the info in a state
            setResult(res)
            } catch (error: any){
            setError(error.message)
            } finally{
            setLoading(false) //remove if data is fetched or an error is displayed
        }       
        // setPage(1)
    }
    // fetch data when component is mounted, and fetch in case there is a change in page 
    useEffect( ()=> {
        getFilms(page)
    }, [page])

return (
            <>
                {error && <ErrorHandling error={error} />}
                {loading && <Loading/>}
                {result && (
                <>
                    <Films res={result}/>
                    <Pagination
                        page={page}
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
export default FilmsPage