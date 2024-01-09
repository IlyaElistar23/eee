import { useContext } from "react"
import ThemeContext from "./ThemeContext"

const Wrapper = () => {
    const theme = useContext(ThemeContext)
    return <theme></theme>
}

export default Wrapper;