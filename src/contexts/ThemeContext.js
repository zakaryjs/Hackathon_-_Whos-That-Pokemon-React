import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export default function ThemeProvider ({children}) {

    const [theme, setTheme] = useState("rubySapphireClass")

    return (
        <ThemeContext.Provider value={
            {
                theme: theme,
                setTheme: setTheme
            }
        }>
            {children}
        </ThemeContext.Provider>
    )
}