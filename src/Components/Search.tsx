import React from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

interface IProps {
	handleSubmit: (e: React.FormEvent) => void
	searchInput: string
	setSearchInput: (value: string) => void
}

const Search: React.FC<IProps> = ({
	handleSubmit,
	searchInput,
	setSearchInput,
}) => {
	return (
		<Form className="my-4" onSubmit={handleSubmit}>
			<Form.Group className="mb-3" controlId="searchQuery">
				<Form.Label>Search Query</Form.Label>
				<Form.Control
					onChange={(e) => setSearchInput(e.target.value)} // SETsearch the user enters via e.value
					placeholder="Narrow your search"
					required
					type="text"
					value={searchInput} // search input
				/>
			</Form.Group>
			<div className="d-flex jusify-content-end">
				<Button
					disabled={!searchInput.trim().length}
					variant="light"
					type="submit"
				>
					Search
				</Button>
			</div>
		</Form>
	)
}

export default Search
