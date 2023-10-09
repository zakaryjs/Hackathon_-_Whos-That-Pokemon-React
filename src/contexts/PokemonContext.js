import { createContext, useState } from "react";

export const PokemonContext = createContext(null);

export default function PokemonProvider ({children}) {

    const [pokemon, setPokemon] = useState([])

    return (
        <PokemonContext.Provider value={
            {
                pokemon: pokemon,
                setPokemon: setPokemon
            }
        }>
            {children}
        </PokemonContext.Provider>
    )
}