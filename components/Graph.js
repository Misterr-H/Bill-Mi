import {Line, LineChart, Tooltip, XAxis} from "recharts";

const Graph = ({ data }) => {
    return (
        <LineChart width={350} height={150} data={data}>
            <XAxis fontSize={''} dataKey={'name'}/>
            <Tooltip/>
            <Line type="monotone" dataKey="amount" stroke="#6d6d6d" />
        </LineChart>
    )
}

export default Graph;