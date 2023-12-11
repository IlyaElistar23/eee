import Name from './Name';

const Names = (props) => {
    return <ul>
        {props.names.map(name => <Name>{name}</Name>)}
    </ul>
}
export default Names;