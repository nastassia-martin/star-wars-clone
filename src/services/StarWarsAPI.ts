/**
 * SWAPI service
 *
 * <https://swapi.thehiveresistance.com/api/>
 */

import axios from 'axios'
import {SW_FilmResponse, SW_FilmsResponse, SW_PeopleResponse, SW_PersonResponse} from '../types/index'

const BASE_URL = 'https://swapi.thehiveresistance.com/api'

/**
 * Execute a HTTP GET request to all Films.
 * @returns Promise
 */
export const getAllFilms = async (page: number) => {
	const response = await axios.get(`${BASE_URL}/films?page=${page}`)
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