import { createContext, useState } from "react";

export const GuessContext = createContext(null);

export default function GuessProvider ({children}) {

    const [formGuess, setFormGuess] = useState("")

    const [guess, setGuess] = useState("")

    return (
        <GuessContext.Provider value={
            {
                formGuess: formGuess,
                setFormGuess: setFormGuess,
                guess: guess,
                setGuess: setGuess
            }
        }>
            {children}
        </GuessContext.Provider>
    )
}