export const pokemonIds = [1, 20, 30, 34, 66]

interface Pokemon {
    id: number
    name: string
    age?: number
}

export const bulbasur: Pokemon = {
    id: 1,
    name: 'Bulbasur',
}

export const charmander: Pokemon = {
    id: 0,
    name: "",
    age: 1
}

export const pokemons: Pokemon[] = []

pokemons.push( charmander, bulbasur )