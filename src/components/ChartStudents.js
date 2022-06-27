import React from "react";
import TheInput from "./TheInput";

const ChartStudents = (props) => {
    const allInputs = props.profiles.map(item => {
        return (
            <TheInput
            key={item}
            selectName={item}
            selectText={item}
            selectChange={props.profilesChange}
            />
        )
    })
    return (
        <div className="ChartStudents">
            {allInputs}
        </div>
    )
}
export default ChartStudents