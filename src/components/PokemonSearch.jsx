import { useContext, useEffect } from "react"
import { ApiContext } from "../contexts/ApiContext";
import { AnimatedSpriteContext } from "../contexts/AnimatedSpriteContext";
import { PokemonContext } from "../contexts/PokemonContext";
import { ScoreContext } from '../contexts/ScoreContext'


export default function PokemonSearch() {

    const {api} = useContext(ApiContext);
    const {sprite} = useContext(AnimatedSpriteContext)
    const {setGeneratedSprite} = useContext(AnimatedSpriteContext)
    const {setPokemon} = useContext(PokemonContext)
    const {score} = useContext(ScoreContext)

    function getRandomPokemonId(){
        return Math.floor(Math.random() * 800) + 1
    }
    
    async function getPokemonData(targetId = getRandomPokemonId()) {

        const response = await fetch(`${api}pokemon/${targetId}`)
        const data = await response.json()
        let correctlyFormattedPokemonName = data?.name.replace(/-/g, "_")
        console.log(correctlyFormattedPokemonName)
        if (correctlyFormattedPokemonName.includes("tapu")) {
            correctlyFormattedPokemonName = correctlyFormattedPokemonName.replace(/_/g, "")
        }
        setGeneratedSprite(`${sprite}${correctlyFormattedPokemonName}.gif`)
        console.log(data)
        setPokemon(data)
    }

    useEffect(() => {
        getPokemonData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [score])

    return (
        <div>
        </div>
    )
}