import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

import { SW_PlanetsResponse } from "../types"
import * as StarWarsAPI from "../services/StarWarsAPI"

//components
import ErrorHandling from "../components/ErrorHandling"
import Loading from "../components/Loading"
import Pagination from "../components/Pagination"
import Planets from "../components/Planets"
import Search from "../components/Search"

const PlanetsPage = () => {
	const [error, setError] = useState<string | null>(null)
	const [loading, setLoading] = useState(false)
	const [result, setResult] = useState<SW_PlanetsResponse | null>(null)
	const [searchInput, setSearchInput] = useState("")
	const [searchParams, setSearchParams] = useSearchParams({
		search: "",
		page: "1",
	})

	// get "page=" or default value of 1
	const page = Number(searchParams.get("page") || 1)
	// get "search=" from URL Search Params
	const search = searchParams.get("search") || ""

	//get all planets req
	const getPlanets = async (searchQuery: string, searchPage = 1) => {
		setError(null) // null prev result
		setLoading(true) // load whilst fetching data
		setResult(null)

		try {
			// make req
			const res = await StarWarsAPI.getAllPlanets(searchQuery, searchPage)
			// store the info in a state
			setResult(res)
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			setError(error.message)
		} finally {
			setLoading(false) //remove if data is fetched or an error is displayed
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
		// make req
		getPlanets(searchInput, page)
	}
	// fetch data when component is mounted, and fetch in case there is a change in page  or search
	useEffect(() => {
		getPlanets(search, page)
	}, [search, page])

	return (
		<>
			{error && <ErrorHandling error={error} />}
			{loading && <Loading />}

			<Search
				handleSubmit={handleSubmit}
				searchInput={searchInput}
				setSearchInput={setSearchInput}
			/>
			{result && (
				<>
					<Planets res={result} />
					<Pagination
						page={result.current_page}
						onPreviousPage={() =>
							setSearchParams({ search: searchInput, page: String(page - 1) })
						}
						onNextPage={() =>
							setSearchParams({ search: searchInput, page: String(page + 1) })
						}
						currentPage={result.current_page}
						lastPage={result.last_page}
					/>
				</>
			)}
		</>
	)
}
export default PlanetsPage
