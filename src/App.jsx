import { useState, useMemo } from 'react'
import './App.css'

import Dashboard from './components/Dashboard'
import { demographicData, states, years } from './data/mockData'

function App() {
  const [selectedState, setSelectedState] = useState(states[0]);
  const [selectedYear, setSelectedYear] = useState(years[years.length-1])

  // Filter data based on selected state and year
  // useMemo to prevent re-filter if neither of state or year changes
  const filteredData = useMemo(()=>{
    const output = demographicData.filter(item => item.state === selectedState && item.year === selectedYear);
    return demographicData.filter(item => item.state === selectedState && item.year === selectedYear);
      }, [selectedState, selectedYear])

  return (
    <>
      <div>
        <h1>U.S. Demographics</h1>
        <Dashboard 
        selectedState={selectedState}
        selectedYear={selectedYear}
        onStateChange={setSelectedState}
        onYearChange={setSelectedYear}
        states={states}
        years={years}
        currentData={filteredData[0]}
        />
      </div>
    </>
  )
}

export default App
