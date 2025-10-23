import { createMultiMaterialObject } from 'three/examples/jsm/utils/SceneUtils.js';
import './SummaryCards.css'


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
                <div className="card-icon"></div>
                <div className="card-content">
                    <h4>Population</h4>
                    <p>{formatPopulation(data.population)}</p>
                </div>
            </div>
            <div className="summary-card">
                <div className="card-icon"></div>
                <div className="card-content">
                    <h4>Median Income</h4>
                    <p>{formatCurrency(data.medianIncome)}</p>
                </div>
            </div>
            <div className="summary-card">
                <div className="card-icon"></div>
                <div className="card-content">
                    <h4>Median Age</h4>
                    <p>{data.medianAge} years</p>
                </div>
            </div>
        </div>

    )
}