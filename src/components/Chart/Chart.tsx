import { ChartBar } from "./ChartBar";
import "./Chart.css";

export const Chart = (props: any) => {
    const dataPointsValues = props.dataPoints.map((dataPoint: { value: number; }) => dataPoint.value);
    console.log(dataPointsValues);

    const totalMaximum = Math.max(...dataPointsValues);

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint: { value: number; label: string; }) => {
                <ChartBar value={dataPoint.value} maxValue={totalMaximum} key={dataPoint.label} label={dataPoint.label} />
            })}
        </div>
    )
}   