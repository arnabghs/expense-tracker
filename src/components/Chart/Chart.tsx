import React from 'react';

import ChartBar from "./ChartBar";
import "./Chart.css"

const Chart = (props: any) => {
    const values : number[] = props.datapoints.map((dp : any) => dp.value)
    const totalMaximum = Math.max(...values)
    return (
        <div className="chart ">
            {props.datapoints.map((datapoint: any) => <ChartBar
                key={datapoint.label}
                value={datapoint.value}
                maxValue={totalMaximum}
                label={datapoint.label}/>)}
        </div>
    )

}

export default Chart