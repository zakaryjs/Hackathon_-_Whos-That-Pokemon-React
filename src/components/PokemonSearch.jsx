import { useContext, useEffect, useState } from "react"
import { ApiContext } from "../contexts/ApiContext";


export default function PokemonSearch() {

    const [pokemon, setPokemon] = useState([])

    const {api} = useContext(ApiContext);

    function getRandomPokemonId(){
        return Math.floor(Math.random() * 151) + 1
    }
    
    async function getPokemonData(targetId = getRandomPokemonId()) {

        const response = await fetch(`${api}pokemon/${targetId}`)
        const data = await response.json()
        console.log(data)
        setPokemon(data)
        return data
    }

    useEffect(() => {
        getPokemonData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <h2>{pokemon?.name}</h2>
            <img src={pokemon?.sprites?.other?.home['front_default']} alt="pokemon icon" />
        </div>
    )
}