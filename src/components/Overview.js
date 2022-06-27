import React from "react";
import ChartBoard from "./ChartBoard";
import ChartStudents from "./ChartStudents";

class Overview extends React.Component {
    constructor(props) {
        super(props)
        const profiles = props.profiles.map(item => {
            return {
                name: item,
                state: true
            }
        })
        console.log(profiles)
        this.state = {
            profiles: profiles
        }
        this.handleProfiles = this.handleProfiles.bind(this)
    }
    handleProfiles(name, state) {
        this.setState(prevState => {
            const profiles = prevState.profiles.map(item => {
                if (item.name === name) {
                    return {
                        name: item.name,
                        state: state
                    }
                }
                return item
            })
            return {
                profiles: profiles
            }
        })
    }
    calculateAverageDifficult(myData, assignment) {
        let average = 0;
        let items = 0;
        myData.forEach(item => {
            if (item.assignment === assignment) {
                average += item.difficult
                items++;
            }
        })
        return average / items
    }
    calculateAverageFun(myData, assignment) {
        let average = 0;
        let items = 0;
        myData.forEach(item => {
            if (item.assignment === assignment) {
                average += item.fun
                items++;
            }
        })
        return average / items
    }
    averageProfile(myData) {
        const averageProfile = []
        let filterItemId = 1
        myData.forEach(profileItem => {
            const data = averageProfile.find(filterItem => {
                return profileItem.assignment === filterItem.assignment
            })
            if (data === undefined) {
                const averageDifficult = this.calculateAverageDifficult(myData, profileItem.assignment)
                const averageFun = this.calculateAverageFun(myData, profileItem.assignment)
                averageProfile.push({
                    id: filterItemId++,
                    name: 'average',
                    assignment: profileItem.assignment,
                    difficultyRating: averageDifficult,
                    enjoymentRating: averageFun
                })
            }
        })
        //console.log(averageProfile)
        return averageProfile
    }
    filteredThesData() {
        const filteredThesData = this.props.myData.filter(myDataItem => {
            const student = this.state.profiles.find(profileItem => {
                return profileItem.name === myDataItem.name
            })
            return (student !== undefined && student.state === true)
        })
        //console.log(filteredThesData)
        return filteredThesData
    }
    render() {
        const filteredThesData = this.filteredThesData(this.props.myData)
        const averageProfile = this.averageProfile(filteredThesData)
        return (
            <div className="Overview">
                <h1>Overview 2022</h1>
                <ChartStudents
                    profiles={this.props.profiles}
                    profilesChange={this.handleProfiles}
                />
                <ChartBoard
                    myData={averageProfile}
                />
            </div>
        )
    }
}
export default Overview
