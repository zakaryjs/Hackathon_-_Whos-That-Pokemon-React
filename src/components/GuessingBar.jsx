import { useState } from 'react'
import '../styles/GuessingBar.css'

export default function GuessingBar( {onFormSubmit} ) {

    const [guess, setGuess] = useState("")

    function formSubmit(event) {
        event.preventDefault()
        onFormSubmit(guess)
        console.log(guess)
    }

    function handleGuessChange(event) {
        setGuess(event.target.value)
    }


    return (
        <form onSubmit={formSubmit}>
            <input onChange={handleGuessChange}></input>
        </form>
    )

}