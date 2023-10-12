import { useContext, useEffect } from "react"
import { ApiContext } from "../contexts/ApiContext";
import { AnimatedSpriteContext } from "../contexts/AnimatedSpriteContext";
import { PokemonContext } from "../contexts/PokemonContext";
import { ScoreContext } from '../contexts/ScoreContext'


export default function PokemonSearch({setLoading}) {

    const {api} = useContext(ApiContext);
    const {sprite} = useContext(AnimatedSpriteContext)
    const {setGeneratedSprite} = useContext(AnimatedSpriteContext)
    const {setPokemon} = useContext(PokemonContext)
    const {score} = useContext(ScoreContext)

    function getRandomPokemonId(){
        return Math.floor(Math.random() * 800) + 1
    }
    
    async function getPokemonData(targetId = getRandomPokemonId()) {

        setLoading(true)
        const response = await fetch(`${api}pokemon/${targetId}`)
        const data = await response.json()
        let correctlyFormattedPokemonName = data?.species.name.replace(/-/g, "_")
        if (correctlyFormattedPokemonName.includes("tapu")) {
            correctlyFormattedPokemonName = correctlyFormattedPokemonName.replace(/_/g, "")
        }
        if (correctlyFormattedPokemonName.includes("porygon_z")) {
            correctlyFormattedPokemonName = "porygon-z"
        }
        if (correctlyFormattedPokemonName.includes("_o")) {
            correctlyFormattedPokemonName = correctlyFormattedPokemonName.replace(/_/g, "-")
        }
        if (correctlyFormattedPokemonName.includes("mr_mime")) {
            correctlyFormattedPokemonName = "mr.mime"
        }
        setGeneratedSprite(`${sprite}${correctlyFormattedPokemonName}.gif`)
        setPokemon(data)
        setLoading(false)
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