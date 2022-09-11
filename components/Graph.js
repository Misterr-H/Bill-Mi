import {Line, LineChart, ResponsiveContainer, Tooltip, XAxis} from "recharts";

const Graph = ({ data }) => {
    return (
        <ResponsiveContainer height={150}>
            <LineChart data={data}>
                <XAxis fontSize={''} dataKey={'name'}/>
                <Tooltip/>
                <Line type="monotone" dataKey="amount" stroke="#6d6d6d" />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default Graph;