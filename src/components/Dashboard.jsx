import { Control } from "./Control";
import { SummaryCards } from "./SummaryCards";
import { PopulationChart } from "./PopulationChart";
import { AgeChart } from "./AgeChart";
import './Dashboard.css'

const Dashboard = ({selectedState, selectedYear, onStateChange, onYearChange, states, years}) => {
    const stateCA = {
        state: 'California', year: 2020, population: 39538223, medianAge: 36.5, medianIncome: 78700, ageDistribution: { '0-17': 22.1, '18-34': 23.4, '35-54': 26.8, '55-74': 19.2, '75+': 8.5 }
    }

    return (
        <div className="dashboard-container">
            
            <Control
             selectedState={selectedState}
             selectedYear={selectedYear}
             onStateChange={onStateChange}
             onYearChange={onYearChange}
             states={states}
             years={years} />
            <SummaryCards data={stateCA} />
            <div className="chart-container">
                <PopulationChart />
                <AgeChart />
            </div>
        
        </div>
    )
}

export default Dashboard