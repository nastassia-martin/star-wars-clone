import { FilmResource } from "./generic"

export type SW_PlanetsResponse = {
	current_page: number
	data: SW_PlanetData[]
	from: number
	last_page: number
	to: number
	total: number
}

export type SW_PlanetData = {
	id: number
	name: string
	rotation_period: string
	orbital_period: string
	diameter: string
	climate: string
	gravity: string
	terrain: string
	surface_water: string
	population: string
	created: string
	edited: string
	residents_count: number
	films_count: number
}

export type SW_PlanetResponse = {
	id: number
	name: string
	rotation_period: string
	orbital_period: string
	diameter: string
	climate: string
	gravity: string
	terrain: string
	surface_water: string
	population: string
	created: string
	edited: string
	residents: ResidentsResource[]
	films: FilmResource[]
}

export type ResidentsResource = {
	id: number
	name: string
	birth_year: string
	eye_color: string
	hair_color: string
	height: string
	mass: string
	skin_color: string
	created: string
	edited: string
}
