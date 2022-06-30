import React from "react";
import { VictoryAxis, VictoryBar, VictoryChart, VictoryGroup, VictoryTooltip, VictoryZoomContainer } from "victory";
import TheInput from "./TheInput";

  // Start Class
class ChartBoard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            difficult: true,
            fun: true
        }
        this.handleChart = this.handleChart.bind(this)
    }
    handleChart(name, state) {
        if (name === "difficult") {
            this.setState(() => {
                return {
                    difficult: state
                }
            })
        } else if (name === "fun") {
            this.setState(() => {
                return {
                    fun: state
                }
            })
        }
    }
    render() {
        const difficultyChart = (difficult) => {
            if (difficult) {
                return (
                    <VictoryBar
                    colorScale={"green"}
                    alignment="middle"
                    labelComponent={<VictoryTooltip />}
                    //data={assignmentRatingAverageWithLabels}
                    data={this.props.myData}
                    x="assignment"
                    y="difficult"
                    tickValues={[1, 2, 3, 4, 5]}/*
                    tickFormat={assignmentRatingAverageWithLabels.map(
                        avg => avg.assignment
                    )} *//> 
                )
            }
        }
        const enjoymentChart = (fun) => {
            if (fun) {
                return (
                    <VictoryBar
                    colorScale={"red"}
                    alignment="end"
                    labelComponent={<VictoryTooltip />}
                    //data={assignmentRatingAverageWithLabels}
                    data={this.props.myData}
                    x="assignment"
                    y="fun"
                    tickValues={[1, 2, 3, 4, 5]} /*
                    tickFormat={assignmentRatingAverageWithLabels.map(
                        avg => avg.assignment
                    )}*/ />
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
                    domainPadding= { 15 } className= "VictoryChart-BarChart"
                    padding={{ top: 30, bottom: 100, left: 30, right: 30 }}
                    containerComponent={
                        <VictoryZoomContainer
                          zoomDimension="x"
                    />
                    }
                    >
                    <VictoryAxis 
                    tickValues={[1, 2, 3, 4, 5]}
                    tickFormat={this.props.myData.assignment}
                    style = {{
                        tickLabels: { angle: 65, textAnchor: 'start', fontSize: 6 },
                        ticks: { stroke: "green", size: 5 }
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

                    <VictoryGroup offset={5} style={{ data: { width: 3 }}}
                    >
                        {difficultyChart(this.state.difficult)}
                        {enjoymentChart(this.state.fun)}
                    </VictoryGroup>
                </VictoryChart>
                <div className="TheChartInfo">
                    <h6>[ScrollWeel ToZoom TheChart]</h6>
                    <p className="boxDifficult">Really Difficulty</p>
                    <p className="boxFun">Really Enjoyment</p>
                </div>
            </div>
        )
    }
}
export default ChartBoard;

