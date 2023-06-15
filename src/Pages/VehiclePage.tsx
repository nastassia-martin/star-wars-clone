import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import * as StarWarsAPI from "../services/StarWarsAPI"
import { SW_VehicleResponse } from "../types"

import ErrorHandling from "../components/ErrorHandling"
import GoBackButton from "../components/GoBackButton"
import Loading from "../components/Loading"
import Vehicle from "../components/Vehicle"

const StarshipPage = () => {
	const [error, setError] = useState<string | null>(null) // error state
	const [loading, setLoading] = useState(true) // loading state
	const [vehicle, setVehicle] = useState<SW_VehicleResponse | null>(null)
	const { id } = useParams() // for API
	const vehicleId = Number(id) // for API

	const getSpecies = async (vehicleId: number) => {
		setError(null)
		setLoading(true)

		try {
			const data = await StarWarsAPI.getVehicle(vehicleId)
			setVehicle(data)
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			setError(error.message)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		getSpecies(vehicleId)
	}, [vehicleId])
	return (
		<>
			{error && <ErrorHandling error={error} />}
			{loading && <Loading />}
			{vehicle && (
				<>
					<Vehicle vehicle={vehicle} />
					<GoBackButton />
				</>
			)}
		</>
	)
}
export default StarshipPage
