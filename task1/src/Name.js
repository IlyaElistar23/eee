import { useEffect } from "react";

const Name = (props) => {
    useEffect(() => console.log(`Mounted with ${props.children}`), [])
    useEffect(() => console.log(`Updated with ${props.children}`), [props.names])
    return <li>{props.children}</li>
}
export default Name;