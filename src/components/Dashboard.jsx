import { Control } from "./Control";
import { SummaryCards } from "./SummaryCards";
import { PopulationChart } from "./PopulationChart";
import { AgeChart } from "./AgeChart";
import './Dashboard.css'

const Dashboard = ({selectedState, selectedYear, onStateChange, onYearChange, states, years, currentData, stateData}) => {
    // console.log('current Data',currentData)

    return (
        <div className="dashboard-container">
            
            <Control
             selectedState={selectedState}
             selectedYear={selectedYear}
             onStateChange={onStateChange}
             onYearChange={onYearChange}
             states={states}
             years={years} />

            <SummaryCards data={currentData} />

            <div className="chart-container">
                <PopulationChart stateData={stateData} years={years}/>
                <AgeChart data={currentData}/>
            </div>
        
        </div>
    )
}

export default Dashboard