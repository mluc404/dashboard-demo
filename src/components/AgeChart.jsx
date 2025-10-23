import './AgeChart.css'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts'


export const AgeChart = ({data}) => {
    // Transform age distribution data for the chart
    const chartData = Object.entries(data.ageDistribution).map(([ageGroup, percentage])=>{
        return {ageGroup, percentage}
    })
    console.log('chart data', chartData)
    return (
        <div className="age-chart-container">
            <h3>Age Distribution</h3>
            <ResponsiveContainer width='100%' height={200}>
                <BarChart data={chartData}>
                <CartesianGrid />
                <Bar dataKey={'percentage'} barSize={40} fill='#8884d8' />
                <YAxis/>
                <XAxis dataKey={'ageGroup'}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}