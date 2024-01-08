import { Link } from "react-router-dom"
import  Homepage  from "./Homepage";

const Notfoundpage = () => {
    return <h1>This page doesn't exist. Go ti<Link to={<Homepage/>}>home</Link></h1>
}

export default Notfoundpage;