import { Resource, FilmResource } from './generic'

export type SW_VehiclesResponse = {
    current_page: number
    data: SW_VehicleData[]
    from: number
    last_page: number
    to: number
    total: number
}

export type SW_VehicleData = {
    id: number
    name: string
    model: string
    vehicle_class: string
    manufacturer: string
    length: string
    cost_in_credits: string
    crew: string
    passengers: string
    max_atmosphering_speed: string
    cargo_capacity: string
    consumables: string
    created: string
    edited: string
    pilots_count: number
    films_count: number
}

export type SW_VehicleResponse = {
    id: number
    name: string
    model: string
    vehicle_class: string
    manufacturer: string
    length: string
    cost_in_credits: string
    crew: string
    passengers: string
    max_atmosphering_speed: string
    cargo_capacity: string
    consumables: string
    created: string
    edited: string
    pilots: Resource[]
    films: FilmResource[]
}