import './Control.css'

export const Control = ({selectedState, selectedYear, onStateChange, onYearChange, states, years}) =>{

    return (
        <div className='control-container'>
            

            {/* State Selector */}
            <select
            id="year-select"
            className='control-select'
            value={selectedState}
            onChange={e => onStateChange(e.target.value)}
            >
                {states.map(state => (
                    <option key={state} value={state}>
                        {state}
                    </option>
                ))}
            </select>

            {/* Year Selector */}
            <select
            id="year-select"
            className='control-select'
            value={selectedYear}
            onChange={e => onYearChange(Number(e.target.value))}
            >
                {years.map(year => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </select>
            
        </div>
    )
}