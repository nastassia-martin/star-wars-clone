import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { SW_PlanetResponse } from "../types"
import * as StarWarsAPI from "../services/StarWarsAPI"

//components
import ErrorHandling from "../components/ErrorHandling"
import GoBackButton from "../components/GoBackButton"
import Loading from "../components/Loading"
import Planet from "../components/Planet"

const PlanetPage = () => {
	const [error, setError] = useState<string | null>(null) // error state
	const [loading, setLoading] = useState(true) // loading state
	const [planet, setPlanet] = useState<SW_PlanetResponse | null>(null)
	const { id } = useParams() // for API
	const planetId = Number(id) // for API

	const getPlanet = async (planetId: number) => {
		setError(null)
		setLoading(true)

		try {
			const data = await StarWarsAPI.getPlanet(planetId)
			setPlanet(data)
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			setError(error.message)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		getPlanet(planetId)
	}, [planetId])

	return (
		<>
			{error && <ErrorHandling error={error} />}
			{loading && <Loading />}
			{planet && (
				<>
					<Planet planet={planet} />
					<GoBackButton />
				</>
			)}
		</>
	)
}
export default PlanetPage
