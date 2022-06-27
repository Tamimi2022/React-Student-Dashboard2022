import React from "react";
import { VictoryAxis, VictoryChart, VictoryLine } from "victory";


class ChartTabel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        console.log(this.props.averageStudent)
        return (
            <div className="BarChart">
                <p>Line Chart</p>
                <VictoryChart padding={{ top: 30, bottom: 100, left: 30, right: 50 }} >

                <VictoryAxis
                tickFormat={this.props.averageStudent.assignment}
                style={{
                    tickLabels: { angle: 45, textAnchor: "start", fontSize: 6 },
                    ticks: { stroke: "red", size: 5 },
                    grid: { stroke: "rgb(335, 221, 0)" }
                }}
                />
                <VictoryAxis
                        dependentAxis
                        tickFormat={[0, 1, 2, 3, 4, 5]}
                        style={{
                            tickLabels: { fontSize: 10 },
                            ticks: { stroke: "red", size: 5 },
                            grid: { stroke: "rgb(221, 253, 253)" }
                        }}
                    />
                    <VictoryLine
                        style={{
                            data: { stroke: "#fbae94" },
                            parent: { border: "1px solid #fff" }
                        }}
                        data={this.props.averageStudent}
                        x="assignment"
                        y="average"
                    />
                <VictoryLine style={{
                    data: { stroke: "#99004C" },
                    parent: { border: "1px solid #fff"}
                }}
                data= {this.props.averageAll}
                x= "assignment"
                y= "average"
                />
                </VictoryChart>
                <div className="TheChartInfo">
                    <h4>Average Grade with All data: </h4>
                    <p className="boxDifficult">Difficulty</p>
                    <p className="boxFun">Fun</p>
                </div>
            </div>
        )
    }
}
export default ChartTabel