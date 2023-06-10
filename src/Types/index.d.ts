export type SW_FilmsResponse = {
    current_page: number
    data: SW_FilmData[]
    from: number
    to: number
    last_page: number
    total: number
}

export type SW_FilmData = {
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

export type SW_FilmResponse = {
    id: number
    title: string
    episode_id: string
    opening_crawl: string
    director: string
    producer: string
    release_date: string
    created: string
    edited: string
    characters: Resource[]
    planets: Resource[]
    starships: Resource[]
    vehicles: Resource[]
    species: Resource[]
}

export type Resource = {
    id: number
    name: string
}

export type FilmResource = {
    id: number
    title: string
}

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
    homeworld: Resource[]
    films: number
    starships_count: number
    vehicles_count: number
    homeworld: Resource[]
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
    homeworld: Resource[]
    films: FilmResource[]
    species: Resource[]
    starships: Resource[]
    vehicles: Resource[]
}

