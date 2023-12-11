import { Fragment, useRef } from "react"

const AddName = (props) => {
    const getInput = useRef(null)
    const addToTop = () => {
        if (!getInput.current.value.trim()) {
            return;
        }
        props.addTop(getInput.current.value)
        getInput.current.value = ''
    }
    const addToBottom = () => {
        if (!getInput.current.value.trim()) {
            return;
        }
        props.addBottom(getInput.current.value)
        getInput.current.value = ''
    }

    return (
        <Fragment>
            <input ref={getInput}/>
            <button onClick={addToTop}>Add to TOP</button>
            <button onClick={addToBottom}>Add to BOTTOM</button>
        </Fragment>
    )
}
export default AddName;