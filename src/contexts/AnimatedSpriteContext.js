import { createContext, useState } from "react";

export const AnimatedSpriteContext = createContext(null);

export default function AnimatedSpriteProvider ({children}) {

    const [animatedSpriteUrl, setAnimatedSpriteUrl] = useState("https://projectpokemon.org/images/normal-sprite/")

    return (
        <AnimatedSpriteContext.Provider value={
            {
                sprite: animatedSpriteUrl,
                setSprite: setAnimatedSpriteUrl
            }
        }>
            {children}
        </AnimatedSpriteContext.Provider>
    )
}