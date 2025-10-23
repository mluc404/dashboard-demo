import './AgeChart.css'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Legend, Tooltip } from 'recharts'


export const AgeChart = ({data}) => {
    // Transform age distribution data for the chart
    const chartData = Object.entries(data.ageDistribution).map(([ageGroup, percentage])=>{
        return {ageGroup, percentage}
    })

    const formatPercentage = (value) => `${value}%`;
    return (
        <div className="age-chart-container">
            <h3 className='chart-name'>Age Distribution</h3>
            <ResponsiveContainer width='100%' height={250}>
                <BarChart data={chartData}>
                <CartesianGrid strokeDasharray={'5 5'} opacity={'0.5'}/>
                <Tooltip />
                <YAxis 
                    tick={{ fontSize: 14, fill: '#929292' }}
                    tickFormatter={formatPercentage}
                    tickLine={{stroke: '#929292'}}
                    axisLine={{stroke: '#929292', strokeWidth:'1'}}
                />
                <XAxis 
                dataKey={'ageGroup'}
                tick={{ fontSize: 14, fill: '#929292' }}
                />
                <Bar dataKey={'percentage'} barSize={60} fill='#7b52f5' radius={[4,4,0,0]} name='Percentage'/>

                <Legend />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}