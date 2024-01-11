import React, { useContext, useState } from "react";
import "./Switch.css";
import styled from "styled-components";
import ThemeContext from "./ThemeContext";
import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcon";

const StyledSwitch = styled.div`
background-color: ${props => props.theme.body};
padding: 1rem;
display: flex;
justify-content: center;
`

const Switch = ({switchTheme}) => {
  const [isToggled, setIsToggled] = useState(false);

  const onToggle = () => {
    setIsToggled(!isToggled);
    switchTheme()
  };

  const theme = useContext(ThemeContext)

  return (
    <StyledSwitch theme={theme}>
    <SunIcon/>
    <label className="toggle-switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="switch" />
    </label>
    <MoonIcon/>
    </StyledSwitch>

  );
}
export default Switch;