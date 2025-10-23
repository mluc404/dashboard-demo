import './SummaryCards.css'


export const SummaryCards = ({ data }) => {

    return (
        <div className='summary-card-container'>
            <div className="summary-card">
                <div className="card-icon"></div>
                <div className="card-content">
                    <h3>Population</h3>
                    <p>{data.population}</p>
                </div>
            </div>
            <div className="summary-card">
                <div className="card-icon"></div>
                <div className="card-content">
                    <h3>Median Income</h3>
                    <p>{data.medianIncome}</p>
                </div>
            </div>
            <div className="summary-card">
                <div className="card-icon"></div>
                <div className="card-content">
                    <h3>Median Age</h3>
                    <p>{data.medianAge}</p>
                </div>
            </div>
        </div>

    )
}