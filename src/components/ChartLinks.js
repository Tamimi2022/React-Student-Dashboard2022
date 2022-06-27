import React from "react";
import { Link } from "react-router-dom";


const ChartLinks = (props) => {
    const toProfile = props.profiles.map(item => {
        const toLink = "/Profiles/Student/" + item
        return (
            <li key={item}>
                <Link to={toLink}>{item}</Link>
            </li>
        )
    })
    return (
        <div className="ChartLinks">
            <h1>Profiles</h1>
            <div className="AllList">
            <ul className="ProfileList">
                {toProfile}
            </ul>
            </div>
        </div>
    )
}
export default ChartLinks