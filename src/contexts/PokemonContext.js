import { createContext, useState } from "react";

export const PokemonContext = createContext(null);

export default function PokemonProvider ({children}) {

    const firstLoadData = 
    {species: {
        name: ""
    }}

    const [pokemon, setPokemon] = useState([])
    const [previousPokemon, setPreviousPokemon] = useState(firstLoadData)

    return (
        <PokemonContext.Provider value={
            {
                pokemon: pokemon,
                setPokemon: setPokemon,
                previousPokemon: previousPokemon,
                setPreviousPokemon: setPreviousPokemon
            }
        }>
            {children}
        </PokemonContext.Provider>
    )
}