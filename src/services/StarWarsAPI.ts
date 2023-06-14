/**
 * SWAPI service
 *
 * <https://swapi.thehiveresistance.com/api/>
 */

import axios from 'axios'
import {
	SW_FilmResponse, 
	SW_FilmsResponse, 
	SW_PeopleResponse, 
	SW_PersonResponse,
	SW_PlanetsResponse,
	SW_PlanetResponse,
	SW_SpeciesResponse, 
	SW_SpeciResponse,
	SW_StarshipsResponse, 
	SW_StarshipResponse,
	SW_VehiclesResponse,
	SW_VehicleResponse
} from '../types/index'

const BASE_URL = 'https://swapi.thehiveresistance.com/api'

export const getAllFilms = async (search: string, page = 1) => {
	const response = await axios.get(`${BASE_URL}/films?search=${search}&page=${page}`)
	return response.data as SW_FilmsResponse
} 

export const getFilm = async (film_id: number) => {
	const response = await axios.get(`${BASE_URL}/films/${film_id}`)
	return response.data as SW_FilmResponse
}
export const getAllPeople = async (search: string, page = 1) => {
	const response = await axios.get(`${BASE_URL}/people?search=${search}&page=${page}`)
	return response.data as SW_PeopleResponse
}

export const getPerson = async (person_id: number) => {
	const response = await axios.get(`${BASE_URL}/people/${person_id}`)
	return response.data as SW_PersonResponse
}

export const getAllPlanets = async (search: string, page = 1) => {
	const response = await axios.get(`${BASE_URL}/planets?search=${search}&page=${page}`)
	return response.data as SW_PlanetsResponse
}

export const getPlanet = async (planet_id: number) => {
	const response = await axios.get(`${BASE_URL}/planets/${planet_id}`)
	return response.data as SW_PlanetResponse
}

export const getAllSpecies = async (search: string, page = 1) => {
	const response = await axios.get(`${BASE_URL}/species?search=${search}&page=${page}`)
	return response.data as SW_SpeciesResponse
}

export const getSpeci = async (species_id: number) => {
	const response = await axios.get(`${BASE_URL}/species/${species_id}`)
	return response.data as SW_SpeciResponse
}

export const getAllStarships = async (search: string, page = 1) => {
	const response = await axios.get(`${BASE_URL}/starships?search=${search}&page=${page}`)
	return response.data as SW_StarshipsResponse
}

export const getStarship = async (starship_id: number) => {
	const response = await axios.get(`${BASE_URL}/starships/${starship_id}`)
	return response.data as SW_StarshipResponse
}

export const getAllVehicles = async (search: string, page = 1) => {
	const response = await axios.get(`${BASE_URL}/vehicles?search=${search}&page=${page}`)
	return response.data as SW_VehiclesResponse
}

export const getVehicle = async (starship_id: number) => {
	const response = await axios.get(`${BASE_URL}/vehicles/${starship_id}`)
	return response.data as SW_VehicleResponse
}