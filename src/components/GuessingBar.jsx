import { useState } from 'react'
import '../styles/GuessingBar.css'

export default function GuessingBar() {

    const [guess, setGuess] = useState("")

    function formSubmit(event) {
        event.preventDefault()
    }

    return (
        <form onSubmit={formSubmit}>
            <input></input>
        </form>
    )

}