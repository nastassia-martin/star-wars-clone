import { Resource, FilmResource } from './generic'

export type SW_SpeciesResponse = {
    current_page: number
    data: SW_SpeciesData[]
    from: number
    last_page: number
    to: number
    total: number
}

export type SW_SpeciesData = {
    id: number
    name: string
    classification: string
    designation: string
    average_height: string
    average_lifespan: string
    eye_colors: string
    hair_colors: string
    skin_colors: string
    language: string
    created: string
    edited: string
    people_count: number
    films_count: number
    homeworld: Resource
}

export type SW_SpeciData = {
    id: number
    name: string
    classification: string
    designation: string
    average_height: string
    average_lifespan: string
    eye_colors: string
    hair_colors: string
    skin_colors: string
    language: string
    created: string
    edited: string
    people: Resource[]
    homeworld: Resource
    films: FilmResource[]
}