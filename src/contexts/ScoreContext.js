import { createContext, useState } from "react";

export const ScoreContext = createContext(null);

export default function ScoreProvider ({children}) {

    const [score, setScore] = useState(0)

    return (
        <ScoreContext.Provider value={
            {
                score: score,
                setScore: setScore
            }
        }>
            {children}
        </ScoreContext.Provider>
    )
}