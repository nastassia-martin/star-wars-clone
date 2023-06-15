import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import * as StarWarsAPI from "../services/StarWarsAPI"
import { SW_StarshipResponse } from "../types"

import ErrorHandling from "../components/ErrorHandling"
import GoBackButton from "../components/GoBackButton"
import Loading from "../components/Loading"
import Starship from "../components/Starship"

const StarshipPage = () => {
	const [error, setError] = useState<string | null>(null) // error state
	const [loading, setLoading] = useState(true) // loading state
	const [starship, setStarship] = useState<SW_StarshipResponse | null>(null)
	const { id } = useParams() // for API
	const starshipId = Number(id) // for API

	const getSpecies = async (starshipId: number) => {
		setError(null)
		setLoading(true)

		try {
			const data = await StarWarsAPI.getStarship(starshipId)
			setStarship(data)
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			setError(error.message)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		getSpecies(starshipId)
	}, [starshipId])
	return (
		<>
			{error && <ErrorHandling error={error} />}
			{loading && <Loading />}
			{starship && (
				<>
					<Starship starship={starship} />
					<GoBackButton />
				</>
			)}
		</>
	)
}

export default StarshipPage
