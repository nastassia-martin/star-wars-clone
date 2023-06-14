import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import * as StarWarsAPI from '../services/StarWarsAPI'
import { SW_SpeciResponse } from '../types'

import ErrorHandling from '../components/ErrorHandling'
import GoBackButton from '../components/GoBackButton';
import Loading from '../components/Loading';
import Speci from '../components/Speci'

const SpeciPage = () => {
    const [error, setError] = useState<string | null>(null) // error state
    const [loading, setLoading] = useState(true) // loading state
    const [species, setSpecies] = useState<SW_SpeciResponse | null>(null)
    const { id } = useParams() // for API
    const speciesId = Number(id) // for API

    const getSpecies = async (speciesId: number) => {
        setError(null)
        setLoading(true)

        try {
            const data = await StarWarsAPI.getSpeci(speciesId)
            console.log(data)
            setSpecies(data)

            } catch (error: any){
            setError(error.message)
            } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getSpecies(speciesId)
    }, [speciesId])
  return (
        <>
            {error && <ErrorHandling error={error} />}
            {loading && <Loading/>}
            {species && (
                <>
                <Speci speci={species}/>
                <GoBackButton />
                </>
            )}    
        </>
  )
}

export default SpeciPage
