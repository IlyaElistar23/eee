import styled from 'styled-components'

const StyledLightTheme = styled.div`
color: black;
background-color: white;
font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
transition: all 0.50s linear;
`

const StyledDarkTheme = styled.div`
color: white;
background-color: black;
font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
transition: all 0.50s linear;
`
export const LightTheme = () => {
    return <StyledLightTheme/>
}
export const DarkTheme = () => {
    return <StyledDarkTheme/>
}