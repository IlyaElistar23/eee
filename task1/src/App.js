import { lightTheme, darkTheme } from "./Themes";
import { GlobalStyle } from "./GlobalStyles";
import { useState } from "react";
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from "./useDarkMode";
import Toggle from "./Toggler";

function App() {
  const [theme, themeToggler] = useDarkMode()

  const themeMode = () => theme === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyle/>
        <div className="App">
          <Toggle theme={theme} toggleTheme={themeToggler}/> 
        </div>
      </>
    </ThemeProvider>
  )
}

export default App;