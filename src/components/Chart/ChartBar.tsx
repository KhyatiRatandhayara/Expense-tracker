import "./ChartBar.css";

export const ChartBar = (props: any) => {
    let barFillHeight = '0%';
    if (props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }
    console.log(barFillHeight);
    console.log(props.label);

    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div
                    className='chart-bar__fill'
                    style={{ height: barFillHeight }}
                ></div>
            </div>
            <div className='chart-bar__label'>{props.label}</div>
        </div>

        // <div className="chart-bar">
        //     <div className="chart-bar__inner">
        //         <div className="chart-bar__fill"></div>
        //     </div>
        //     <div className="chart-bar__label"></div>
        // </div>
    );
}