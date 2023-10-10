import { useContext } from "react"
import { AnimatedSpriteContext } from "../contexts/AnimatedSpriteContext";
import { PokemonContext } from "../contexts/PokemonContext";
import { ScoreContext } from '../contexts/ScoreContext'


export default function Pokemon() {

    const {score} = useContext(ScoreContext)
    // const {pokemon} = useContext(PokemonContext)
    const {generatedSprite} = useContext(AnimatedSpriteContext)

    return (
        <div>
            <h1>{score}</h1>
            {/* <h1>{pokemon.name}</h1> */}
            <img src={generatedSprite} alt=""/>
        </div>
    )
}