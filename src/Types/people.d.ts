import { Resource, FilmResource } from './generic'


export type SW_PeopleResponse = {
    current_page: number
    data: SW_PeopleData[]
    from: number
    to: number
    last_page: number
    total: number
}

export type SW_PeopleData = {
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
    films_count: number
    starships_count: number
    vehicles_count: number
    homeworld: Resource
}

export type SW_PersonResponse = {
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
    homeworld: Resource
    films: FilmResource[]
    species: Resource[]
    starships: Resource[]
    vehicles: Resource[]
}