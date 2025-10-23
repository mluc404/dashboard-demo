import './SummaryCards.css'
import groupIcon from '../assets/group.svg'
import moneyIcon from '../assets/money.svg'
import calendarIcon from '../assets/calendar.svg'


export const SummaryCards = ({ data }) => {

    // Function to add commas to population number
    const formatPopulation = (num) => {
        return new Intl.NumberFormat('en-US').format(num);
    }
    
    // Function to format income display
    const formatCurrency = (num) => {
        return Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(num)
    }

    return (
        <div className='summary-card-container'>
            <div className="summary-card">
                <div className="card-icon">
                    <img 
                    src={groupIcon} 
                    alt="Group Icon"
                    />
                </div>
                <div className="card-content">
                    <h4 className='stat-key'>Population</h4>
                    <p className='stat-value'>{formatPopulation(data.population)}</p>
                </div>
            </div>
            <div className="summary-card">
                <div className="card-icon">
                <img 
                    src={moneyIcon} 
                    alt="Group Icon"
                    />
                </div>
                <div className="card-content">
                    <h4 className='stat-key'>Median Income</h4>
                    <p className='stat-value'>{formatCurrency(data.medianIncome)}</p>
                </div>
            </div>
            <div className="summary-card">
                <div className="card-icon">
                <img 
                    src={calendarIcon} 
                    alt="Group Icon"
                    />
                </div>
                <div className="card-content">
                    <h4 className='stat-key'>Median Age</h4>
                    <p className='stat-value'>{data.medianAge} years</p>
                </div>
            </div>
        </div>

    )
}