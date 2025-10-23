import './PopulationChart.css'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts'


export const PopulationChart = ({stateData}) => {
    console.log(stateData)

    return (
        <div className="population-chart-container">
            <h3>Population Trend</h3>
            <ResponsiveContainer width='100%' height={200}>
                <LineChart data={stateData}>
                    <CartesianGrid />
                    <Line dataKey={'population'} />
                    <XAxis dataKey={'year'} />
                    <YAxis 
                    tickFormatter={(value)=>`${(value/1000000).toFixed(1)}M`}
                    domain={['dataMin - 10000000', 'dataMax + 10000000']} 
                    // domain={[20000000, 50000000]} 
                    tickCount={5}
                    />
                </LineChart>
            </ResponsiveContainer>
           
        </div>
    )
}