import { useContext, useEffect } from 'react'
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
    }

    useEffect(() => {
        if (guess.length > 0) {
            console.log(guess)
            checkGuess()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [guess])

    function checkGuess() {
        if (guess === pokemon.name) {
            console.log('You have guessed the correct answer!')
        } else {
            console.log('You have guessed the wrong answer!')
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