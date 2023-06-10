import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import * as StarWarsAPI from '../services/StarWarsAPI'
import { SW_FilmResponse } from '../types'
import Accordion from 'react-bootstrap/Accordion';
import Button  from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import Loading from '../components/Loading';
import ErrorHandling from '../components/ErrorHandling'
import Film from '../components/Film';


const FilmPage = () => {
    const [error, setError] = useState<string | null>(null) // error state
    const [loading, setLoading] = useState(true) // loading state
    const [film, setFilm] = useState<SW_FilmResponse | null>(null)
    const { id } = useParams() // for API
    const filmId = Number(id) // for API
    const navigate = useNavigate()


    const getFilm = async (filmId: number) => {
        setError(null)
        setLoading(true)

        try{
            const data = await StarWarsAPI.getFilm(filmId)
            console.log(data)
            setFilm(data)

        } catch (error: any){
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }
    
    useEffect(() => {
        getFilm(filmId)
    }, [filmId])

  return (
    <>
        {error && <ErrorHandling error={error} />}
        {loading && <Loading/>}
        {film && (
            <>
            <Film film={film} />
            <div className="nav-back">
                <Button
                    onClick={() => navigate(-1)} 
                    variant="primary"
                >&laquo; Back to films</Button>
            </div>
            </>
        )}           
    </>
  )
}
export default FilmPage