import { useState } from 'react'
import '../styles/GuessingBar.css'

export default function GuessingBar( {onFormSubmit} ) {

    const [guess, setGuess] = useState("")

    function formSubmit(event) {
        event.preventDefault()
        onFormSubmit(guess)
        console.log(guess)
        event.target.reset()
    }

    function handleGuessChange(event) {
        setGuess(event.target.value)
    }

    return (
        <div>
        <form id='guessingBar' onSubmit={formSubmit}>
            <input id='guessingBarInput' onChange={handleGuessChange}></input>
        </form>
        </div>
    )

}