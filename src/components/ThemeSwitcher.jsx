import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ThemeSwitcher() {

    const {setTheme} = useContext(ThemeContext)

    function handleChange(event) {
        setTheme(event.target.value)
    }


    return (
        <div>
            <select name="themeSwitcherSelect" onChange={handleChange} defaultValue="rubySapphireClass">
                <option value="redBlueClass">Kanto Theme</option>
                <option value="goldSilverClass">Johto Theme</option>
                <option value="rubySapphireClass">Hoenn Theme</option>
                <option value="blackWhiteClass">Unova Theme</option>
            </select>
        </div>
    )

}