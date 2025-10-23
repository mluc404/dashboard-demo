import './PopulationChart.css'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts'


export const PopulationChart = ({stateData}) => {
    console.log(stateData)

    return (
        <div className="population-chart-container">
            <h3 className='chart-name'>Population Trend</h3>
            <ResponsiveContainer width='100%' height={250}>
                <LineChart data={stateData}>
                <CartesianGrid strokeDasharray={'5 5'} opacity={'0.5'}/>
                    <XAxis 
                    dataKey={'year'}
                    tick={{ fontSize: 14, fill: '#929292' }}
                    />
                    <YAxis 
                    tickFormatter={(value)=>`${(value/1000000).toFixed(1)}M`}
                    domain={['dataMin - 10000000', 'dataMax + 10000000']} 
                    // domain={[20000000, 50000000]} 
                    tickCount={5}
                    tick={{ fontSize: 14, fill: '#929292' }}
                    tickLine={{stroke: '#929292'}}
                    axisLine={{stroke: '#929292', strokeWidth:'1'}}
                    />
                    <Tooltip />
                    <Legend />
                    <Line 
                    dataKey={'population'} 
                    stroke='#7b52f5'
                    strokeWidth={'3'}
                    name='Population'
                    />
                </LineChart>
            </ResponsiveContainer>
           
        </div>
    )
}