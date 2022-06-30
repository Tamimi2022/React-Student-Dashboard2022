import React from "react";

const TheInput = (props) => {
    const handleTheInput = (event) => {
         console.log(event.target.checked)
         console.log(props.selectName)
        props.selectChange(props.selectName, event.target.checked)
    }

return (
    <label className="InputLabel">
        <input type="checkbox" onClick={handleTheInput} defaultChecked></input>
        {props.selectText}
    </label>
)
}
export default TheInput