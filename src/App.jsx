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
    return demographicData.filter(item => item.state === selectedState && item.year === selectedYear);
      }, [selectedState, selectedYear])


  // Get population over the year for selected State
  // const statePopData = useMemo(() => {
  //   return demographicData.filter(item => item.state === selectedState).map(item => item.population);
  // }, [selectedState])

  // Filter data based on State only, for charts
  const stateData = useMemo(() =>{
     return demographicData.filter(item =>item.state === selectedState)
  }, [selectedState])

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
        stateData={stateData}
        />
      </div>
    </>
  )
}

export default App
