import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ThemeSwitcher() {

    const {setTheme} = useContext(ThemeContext)

    function handleChange(event) {
        setTheme(event.target.value)
    }


    return (
        <div>
            <select name="themeSwitcherSelect" onChange={handleChange}>
                <option value="defaultClass">Default Theme</option>
                <option value="goldSilverClass">Gold and Silver Theme</option>
                <option value="blackWhiteClass">Black and White Theme</option>
            </select>
        </div>
    )

}