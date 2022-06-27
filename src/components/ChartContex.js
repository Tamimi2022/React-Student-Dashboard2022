import React from "react";
//import { BarChart } from "recharts";
import ChartBoard from "./ChartBoard";
import ChartTabel from "./ChartTabel";

class ChartContex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            profileName: props.match.params.name
        }
    }
    calculateAverageAssignment(myData, assignment) {
        let average = 0;
        let items = 0;
        myData.forEach(item => {
            if (item.assignment === assignment) {
                average += ((item.difficult + item.fun) / 2)
                items++;
            }
        })
        return average / items
    }
    calculateAverageForOneProfile(myData) {
        const averageData = myData.map(profileItem => {
            const average = ((profileItem.difficult + profileItem.fun) / 2)
            return {
                id: profileItem.id,
                name: profileItem.name,
                assignment: profileItem.assignment,
                average: average,
            }
        })
        return averageData
    }
    calculateAverageForAllProfiles(myData) {
        const averageProfile = []
        let filterItemId = 1
        myData.forEach(profileItem => {
            const data = averageProfile.find(filterItem => {
                return profileItem.assignment === filterItem.assignment
            })
            if (data === undefined) {
                const average = this.calculateAverageAssignment(myData, profileItem.assignment)
                averageProfile.push({
                    id: filterItemId++,
                    name: 'average',
                    assignment: profileItem.assignment,
                    average: average,
                })
            }
        })
        return averageProfile
    }
    render() {
        const myData = this.props.myData.filter(item => {
            return item.name === this.state.profileName
        })
        const averageTheStudent = this.calculateAverageForOneProfile(myData)
        const averageDataAll = this.calculateAverageForAllProfiles(this.props.myData)
        return (
            <div className="ChartContex">
                <h1>Student: {this.state.profileName}</h1>
                <ChartBoard
                    myData={myData}
                />
                <ChartTabel
                    averageStudent={averageTheStudent}
                    averageAll={averageDataAll}
                />
            </div>
        )
    }
}
export default ChartContex