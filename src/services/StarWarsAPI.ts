/**
 * SWAPI service
 *
 * <https://swapi.thehiveresistance.com/api/>
 */

import axios from 'axios'
import {FilmResponse, SW_SearchResponse} from '../types/index'

const BASE_URL = 'https://swapi.thehiveresistance.com/api'

/**
 * Execute a HTTP GET request to all Films.
 * @returns Promise
 */
export const getAllFilms = async (page: number) => {
	const response = await axios.get(`${BASE_URL}/films?page=${page}`)
	return response.data as SW_SearchResponse
} 

export const getFilm = async (film_id: number) => {
	const response = await axios.get(`${BASE_URL}/films/${film_id}`)
	return response.data as FilmResponse
}