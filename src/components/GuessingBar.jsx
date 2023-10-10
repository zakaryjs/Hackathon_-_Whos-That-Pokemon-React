import { useContext, useEffect } from 'react'
import '../styles/GuessingBar.css'
import { GuessContext } from '../contexts/GuessContext'
import { PokemonContext } from '../contexts/PokemonContext'
import { ScoreContext } from '../contexts/ScoreContext'

export default function GuessingBar() {

    const {formGuess} = useContext(GuessContext)
    const {setFormGuess} = useContext(GuessContext)
    const {guess} = useContext(GuessContext)
    const {setGuess} = useContext(GuessContext)
    const {pokemon} = useContext(PokemonContext)
    const {score} = useContext(ScoreContext)
    const {setScore} = useContext(ScoreContext)

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

    useEffect(() => {
        console.log(score)
    }, [score])

    function checkGuess() {
        if (guess.toLowerCase()  === pokemon.name) {
            console.log('You have guessed the correct answer!')
            setScore(score + 1)
        } else {
            console.log('You have guessed the wrong answer!')
            setScore(score - 0.5)
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