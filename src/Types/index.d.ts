export type SW_SearchResponse = {
    current_page: number
    data: SW_SearchData[]
    from: number
    to: number
    last_page: number
    total: number
}

export type SW_SearchData = {
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

export type FilmResponse = {
    id: number
    title: string
    episode_id: string
    opening_crawl: string
    director: string
    producer: string
    release_date: string
    created: string
    edited: string
    characters: Characters[]
    planets: Planets[]
    starships: Starships[]
    vehicles: Vehicles[]
    species: Species[]
}

export type Characters = {
    id: number
    name: string
}

export type Planets = {
    id: number
    name: string
}

export type Starships = {
    id: number
    name: string
}

export type Vehicles = {
    id: number
    name: string
}

export type Species = {
    id: number
    name: string
}