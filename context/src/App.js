import MoonIcon from "./MoonIcon";
import SunIcon from "./SunIcon";
import Switch from "./Switch";
import ThemeContext from "./ThemeContext";
import Content from "./Content";
import { useState } from "react";
import { lightTheme, darkTheme } from "./Themes";


function App() {
  const [theme, setTheme] = useState('light')
  const switchTheme = () => theme === 'light' ? setTheme('dark') : setTheme('light')
  return (
    <ThemeContext.Provider value={theme === 'light' ? lightTheme : darkTheme}>
        <SunIcon />
        <Switch switchTheme={switchTheme} />
        <MoonIcon />
        <Content/>
    </ThemeContext.Provider>
  );
}

export default App;
