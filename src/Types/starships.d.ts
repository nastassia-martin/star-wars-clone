import { Resource, FilmResource } from './generic'

export type SW_StarshipsResponse = {
    current_page: number
    data: SW_StarshipsData[]
    from: number
    last_page: number
    to: number
    total: number
}

export type SW_StarshipsData = {
    id: number
    name: string
    model: string
    starship_class: string
    manufacturer: string
    cost_in_credits: string
    length: string
    crew: string
    passengers: string
    max_atmosphering_speed: string
    hyperdrive_rating: string
    MGLT: string
    cargo_capacity: string
    consumables: string
    created: string
    edited: string
    pilots_count: number
    films_count: number
}

export type SW_StarshipResponse = {
    id: number
    name: string
    model: string
    starship_class: string
    manufacturer: string
    cost_in_credits: string
    length: string
    crew: string
    passengers: string
    max_atmosphering_speed: string
    hyperdrive_rating: string
    MGLT: string
    cargo_capacity: string
    consumables: string
    created: string
    edited: string
    pilots: Resource[]
    films: FilmResource[]
}