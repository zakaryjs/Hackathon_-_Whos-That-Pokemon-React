import { useContext, useEffect } from "react"
import { ApiContext } from "../contexts/ApiContext";
import { AnimatedSpriteContext } from "../contexts/AnimatedSpriteContext";
import { PokemonContext } from "../contexts/PokemonContext";


export default function PokemonSearch() {

    const {api} = useContext(ApiContext);
    const {sprite} = useContext(AnimatedSpriteContext)
    const {setSprite} = useContext(AnimatedSpriteContext)
    const {setPokemon} = useContext(PokemonContext)

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
        setSprite(pokemonSprite)
        return data
    }

    useEffect(() => {
        getPokemonData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>

        </div>
    )
}