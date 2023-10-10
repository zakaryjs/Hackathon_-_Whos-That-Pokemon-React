import { useContext } from "react"
import { AnimatedSpriteContext } from "../contexts/AnimatedSpriteContext";
import { PokemonContext } from "../contexts/PokemonContext";


export default function Pokemon() {

    const {pokemon} = useContext(PokemonContext)
    const {generatedSprite} = useContext(AnimatedSpriteContext)

    return (
        <div>
            {/* <h1>{pokemon.name}</h1> */}
            <img src={generatedSprite} alt=""/>
        </div>
    )
}