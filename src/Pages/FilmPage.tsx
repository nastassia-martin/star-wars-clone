import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import * as StarWarsAPI from "../services/StarWarsAPI"
import { SW_FilmResponse } from "../types"

import ErrorHandling from "../components/ErrorHandling"
import Film from "../components/Film"
import GoBackButton from "../components/GoBackButton"
import Loading from "../components/Loading"

const FilmPage = () => {
	const [error, setError] = useState<string | null>(null) // error state
	const [loading, setLoading] = useState(true) // loading state
	const [film, setFilm] = useState<SW_FilmResponse | null>(null)
	const { id } = useParams() // for API
	const filmId = Number(id) // for API

	const getFilm = async (filmId: number) => {
		setError(null)
		setLoading(true)

		try {
			const data = await StarWarsAPI.getFilm(filmId)
			setFilm(data)
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
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
			{loading && <Loading />}
			{film && (
				<>
					<Film film={film} />
					<GoBackButton />
				</>
			)}
		</>
	)
}
export default FilmPage
