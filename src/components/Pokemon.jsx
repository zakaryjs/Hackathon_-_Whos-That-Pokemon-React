import { useContext } from "react"
import { AnimatedSpriteContext } from "../contexts/AnimatedSpriteContext";
// import { PokemonContext } from "../contexts/PokemonContext";
import { ScoreContext } from '../contexts/ScoreContext'
import '../styles/Pokemon.css'


export default function Pokemon({loading}) {

    const {score} = useContext(ScoreContext)
    // const {pokemon} = useContext(PokemonContext)
    const {generatedSprite} = useContext(AnimatedSpriteContext)

    return (
        <div>
            <h1>Score: {score}</h1>
            {/* <h1>{pokemon.name}</h1> */}
            {!loading && <img id='pokemonImage' src={generatedSprite} alt=""/>}
            {loading && <img width={64} height={64} src={require('../images/pokeball.png')} alt="" id="pokeballImage"/>}
        </div>
    )
}