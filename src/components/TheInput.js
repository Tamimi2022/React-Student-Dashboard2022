import React from "react";

const TheInput = (props) => {
    const handleTheInput = (e) => {
        props.selectChange(props.selectName, e.target.checked)
    }

return (
    <label className="InputLabel">
        <input type="checkbox" onClick={handleTheInput} defaultChecked></input>
        {props.selectText}
    </label>
)
}
export default TheInput