import { useContext, useEffect, useState } from "react"
import { ApiContext } from "../contexts/ApiContext";
import { AnimatedSpriteContext } from "../contexts/AnimatedSpriteContext";


export default function PokemonSearch() {

    const [pokemon, setPokemon] = useState([])
    const [animatedSprite, setAnimatedSprite] = useState("")

    const {api} = useContext(ApiContext);
    const {sprite} = useContext(AnimatedSpriteContext)

    function getRandomPokemonId(){
        return Math.floor(Math.random() * 800) + 1
    }
    
    async function getPokemonData(targetId = getRandomPokemonId()) {

        const response = await fetch(`${api}pokemon/${targetId}`)
        const data = await response.json()
        const pokemonSprite = `${sprite}${data?.name}.gif`
        console.log(data)
        console.log(pokemonSprite)
        setPokemon(data)
        setAnimatedSprite(pokemonSprite)
        return data
    }

    useEffect(() => {
        getPokemonData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <h2>{pokemon?.name}</h2>
            <img src={animatedSprite} alt="pokemon icon" />
        </div>
    )
}