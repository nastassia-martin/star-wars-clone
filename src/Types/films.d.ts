import { Resource } from "./generic"

export type SW_FilmsResponse = {
	current_page: number
	data: SW_FilmData[]
	from: number
	to: number
	last_page: number
	total: number
}

export type SW_FilmData = {
	id: number
	title: string
	episode_id: string
	opening_crawl: string
	director: string
	producer: string
	release_date: string
	created: string
	edited: string
	characters_count: number
	planets_count: number
	starships_count: number
	vehicles_count: number
	species_count: number
}

export type SW_FilmResponse = {
	id: number
	title: string
	episode_id: string
	opening_crawl: string
	director: string
	producer: string
	release_date: string
	created: string
	edited: string
	characters: Resource[]
	planets: Resource[]
	starships: Resource[]
	vehicles: Resource[]
	species: Resource[]
}
