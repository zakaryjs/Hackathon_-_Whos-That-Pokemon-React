import { useContext } from 'react'
import '../styles/GuessingBar.css'
import { GuessContext } from '../contexts/GuessContext'
import { PokemonContext } from '../contexts/PokemonContext'

export default function GuessingBar() {

    const {formGuess} = useContext(GuessContext)
    const {setFormGuess} = useContext(GuessContext)
    const {guess} = useContext(GuessContext)
    const {setGuess} = useContext(GuessContext)
    const {pokemon} = useContext(PokemonContext)

    function formSubmit(event) {
        event.preventDefault()
        event.target.reset()
        setGuess(formGuess)
        console.log(formGuess)
        console.log(guess)
        checkGuess()
    }

    function checkGuess() {
        if (guess === pokemon.name) {
            console.log('correct')
        } else {
            console.log('wrong')
        }
    }

    function handleGuessChange(event) {
        setFormGuess(event.target.value)
    }

    return (
        <div>
        <form id='guessingBar' onSubmit={formSubmit}>
            <input id='guessingBarInput' onChange={handleGuessChange}></input>
        </form>
        </div>
    )

}