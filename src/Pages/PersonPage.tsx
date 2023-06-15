import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import * as StarWarsAPI from "../services/StarWarsAPI"
import { SW_PersonResponse } from "../types"

import ErrorHandling from "../components/ErrorHandling"
import GoBackButton from "../components/GoBackButton"
import Loading from "../components/Loading"
import Person from "../components/Person"

const PersonPage = () => {
	const [error, setError] = useState<string | null>(null) // error state
	const [loading, setLoading] = useState(true) // loading state
	const [person, setPerson] = useState<SW_PersonResponse | null>(null)
	const { id } = useParams() // for API
	const personId = Number(id) // for API

	const getPerson = async (personId: number) => {
		setError(null)
		setLoading(true)

		try {
			const data = await StarWarsAPI.getPerson(personId)
			setPerson(data)
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			setError(error.message)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		getPerson(personId)
	}, [personId])

	return (
		<>
			{error && <ErrorHandling error={error} />}
			{loading && <Loading />}
			{person && (
				<>
					<Person person={person} />
					<GoBackButton />
				</>
			)}
		</>
	)
}

export default PersonPage
