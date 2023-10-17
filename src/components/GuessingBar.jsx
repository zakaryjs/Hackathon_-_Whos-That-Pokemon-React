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
            setGuess("")
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [guess])

    useEffect(() => {
        console.log(score)
    }, [score])

    function checkGuess() {
        console.log(guess)
        if (guess.toLowerCase()  === pokemon.species.name) {
            console.log('You have guessed the correct answer!')
            setScore(score + 1)
        } else if ((guess === "mime jr" && pokemon.name === "mime-jr") || (guess === "mr mime" && pokemon.name === "mr-mime") ) {
            console.log('You have guessed the correct answer!')
            setScore(score + 1)
        } else if ((guess === "tapu fini" && pokemon.name === "tapu-fini") || (guess === "tapu koko" && pokemon.name === "tapu-koko") || (guess === "tapu bulu" && pokemon.name === "tapu-bulu") || (guess === "tapu lele" && pokemon.name === "tapu-lele")) {
            console.log('You have guessed the correct answer!')
            setScore(score + 1) 
        } else if (guess === "porygon 2" && pokemon.species.name === "porygon2") {
            console.log('You have guessed the correct answer!')
            setScore(score + 1)
        } else if (guess === "porygon z" && pokemon.species.name === "porygon-z") {
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
        <form id='guessingBar' onSubmit={formSubmit} autoComplete='off'>
            <input id='guessingBarInput' onChange={handleGuessChange} placeholder='Enter your guess here...'></input>
        </form>
        </div>
    )
}