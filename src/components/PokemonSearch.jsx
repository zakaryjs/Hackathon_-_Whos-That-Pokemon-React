import { useContext, useEffect } from "react"
import { ApiContext } from "../contexts/ApiContext";
import { AnimatedSpriteContext } from "../contexts/AnimatedSpriteContext";
import { PokemonContext } from "../contexts/PokemonContext";
import { ScoreContext } from '../contexts/ScoreContext'


export default function PokemonSearch() {

    const {api} = useContext(ApiContext);
    const {sprite} = useContext(AnimatedSpriteContext)
    const {setSprite} = useContext(AnimatedSpriteContext)
    const {generatedSprite} = useContext(AnimatedSpriteContext)
    const {setGeneratedSprite} = useContext(AnimatedSpriteContext)
    const {setPokemon} = useContext(PokemonContext)
    const {score} = useContext(ScoreContext)

    function getRandomPokemonId(){
        return Math.floor(Math.random() * 800) + 1
    }
    
    async function getPokemonData(targetId = getRandomPokemonId()) {

        const response = await fetch(`${api}pokemon/${targetId}`)
        const data = await response.json()
        setGeneratedSprite(`${sprite}${data?.name}.gif`)
        console.log(data)
        setPokemon(data)
    }

    useEffect(() => {
        getPokemonData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [score])

    useEffect(() => {
        if (generatedSprite != "https://projectpokemon.org/images/normal-sprite/") {
            // setSprite(generatedSprite)
            console.log(generatedSprite)
            console.log(sprite)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [generatedSprite])

    return (
        <div>
        </div>
    )
}