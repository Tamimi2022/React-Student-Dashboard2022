import React from "react";
import { VictoryAxis, VictoryBar, VictoryChart, VictoryGroup, VictoryTooltip } from "victory";
import TheInput from "./TheInput";


const getRandomRating = () => Math.random() * 5;
 //Example
let assignmentRatingAverage = [
  { assignment: "SCRUM" },
  { assignment: "W1D1-2" },
  { assignment: "W1D1-1" },
  { assignment: "W1D1-3" },
  { assignment: "W1D2-1" },
  { assignment: "W1D2-2" },
  { assignment: "W1D3-1" },
  { assignment: "W1D3-1" },
  { assignment: "W1D3-2" },
  { assignment: "W1D3-3" },
  { assignment: "W1D3-4" },
  { assignment: "W1D3-5" },
  { assignment: "W1D3-6" }
]; 

assignmentRatingAverage = assignmentRatingAverage.map(avg => ({
  assignment: avg.assignment,
  difficultyRating: getRandomRating(),
  enjoymentRating: getRandomRating()
}));

 //Add label
const assignmentRatingAverageWithLabels = assignmentRatingAverage.map(avg => ({
    assignment: avg.assignment,
    difficultyRating: avg.difficultyRating,
    enjoymentRating: avg.enjoymentRating,
    label: ` ${
      avg.assignment
    }, difficultyRating: ${avg.difficultyRating.toFixed(
      1
    )}, enjoymentRating: ${avg.enjoymentRating.toFixed(1)}`
  }));
  
  // Start Class
class ChartBoard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            difficultyRating: true,
            enjoymentRating: true
        }
        this.handleChart = this.handleChart.bind(this)
    }
    handleChart(name, state) {
        if (name === "difficult") {
            this.setState(() => {
                return {
                    difficultyRating: state
                }
            })
        } else if (name === "fun") {
            this.setState(() => {
                return {
                    enjoymentRating: state
                }
            })
        }
    }
    render() {
        const difficultyChart = (difficultyRating) => {
            if (difficultyRating) {
                return (
                    <VictoryBar
                    colorScale={"red"}
                    alignment="end"
                    labelComponent={<VictoryTooltip />}
                    data={assignmentRatingAverageWithLabels}
                    x="assignment"
                    y="difficultyRating"
                    tickValues={[1, 2, 3, 4, 5]}
                    tickFormat={assignmentRatingAverageWithLabels.map(
                        avg => avg.assignment
                    )} /> 
                )
            }
        }
        const enjoymentChart = (enjoymentRating) => {
            if (enjoymentRating) {
                return (
                    <VictoryBar
                    colorScale={"red"}
                    alignment="end"
                    labelComponent={<VictoryTooltip />}
                    data={assignmentRatingAverageWithLabels}
                    x="assignment"
                    y="enjoymentRating"
                    tickValues={[1, 2, 3, 4, 5]}
                    tickFormat={assignmentRatingAverageWithLabels.map(
                        avg => avg.assignment
                    )} />
                )
            }
        }
        return (
            <div className="ChartBoard">
                <div className="TheInput">
                    <TheInput 
                    selectName = {"difficult"}
                    selectText = {"Difficulty Chart"}
                    selectChange = {this.handleChart} 
                    />
                    <TheInput
                    selectName = {"fun"}
                    selectText = {"Fun Chart"}
                    selectChange = {this.handleChart}
                    />
                </div>

                <VictoryChart 
                    domainPadding= { 17 } className= "VictoryChart-BarChart"
                    padding={{ top: 30, bottom: 100, left: 30, right: 30 }}
                    >
                    <VictoryAxis 
                    tickValues={[1, 2, 3, 4, 5]}
                    tickFormat={this.props.myData.assignment}
                    style = {{
                        tickLabels: { angle: 45, textAnchor: 'start', fontSize: 6 },
                        ticks: { stroke: "red", size: 5 }
                    }}
                     />
                    <VictoryAxis
                    dependentAxis
                    tickFormat={[1, 2, 3, 4, 5]}
                                        style={{
                                            tickLabels: { fontSize: 10 },
                                            ticks: { stroke: "red", size: 5 }
                                        }}
                                    />

                    <VictoryGroup offset={13} style={{ data: { width: 8 }}}
                    >
                        {difficultyChart(this.state.difficultyRating)}
                        {enjoymentChart(this.state.enjoymentRating)}
                    </VictoryGroup>
                </VictoryChart>
                <div className="TheChartInfo">
                    <p className="boxDifficult">Really Difficulty</p>
                    <p className="boxFun">Really Enjoyment</p>
                </div>
            </div>
        )
    }
}
export default ChartBoard;

