import styled from 'styled-components'

const StyledLightTheme = styled.div`
color: # 363537;
toggleBorder: # FFF;
font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
transition: all 0.50s linear;
`

const StyledDarkTheme = styled.div`
color: # FFF;
background-color: # 999;
font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
transition: all 0.50s linear;
`
export const LightTheme = () => {
    return <StyledLightTheme/>
}
export const DarkTheme = () => {
    return <StyledDarkTheme/>
}