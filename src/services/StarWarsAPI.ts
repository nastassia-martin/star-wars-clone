/**
 * SWAPI service
 *
 * <https://swapi.thehiveresistance.com/api/>
 */

import axios from 'axios'
import {SW_SearchResponse} from '../Types/index'

const BASE_URL = 'https://swapi.thehiveresistance.com/api'

/**
 * Execute a HTTP GET request to an endpoint.
 *
 * @param {string} endpoint Endpoint to HTTP GET
 * @returns Promise
 */
export const get = async (endpoint: string) => {
	const response = await axios.get(`${BASE_URL}/${endpoint}`)
	return response.data as SW_SearchResponse
}   