import { useContext } from "react"
import { AnimatedSpriteContext } from "../contexts/AnimatedSpriteContext";
import { PokemonContext } from "../contexts/PokemonContext";


export default function Pokemon( {guessToCompare} ) {

    const {pokemon} = useContext(PokemonContext)
    const {sprite} = useContext(AnimatedSpriteContext)

    return (
        <div>
            {/* <h1>{pokemon.name}</h1> */}
            <img src={sprite} alt=""/>
            {guessToCompare && (guessToCompare === pokemon?.name) && <h1>Correct</h1>}
        </div>
    )
}