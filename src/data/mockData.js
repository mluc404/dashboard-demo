export const demographicData = [
    // California
    {
        state: 'California', year: 2020, population: 39538223, medianAge: 36.5, medianIncome: 78700, ageDistribution: { '0-17': 22.1, '18-34': 23.4, '35-54': 26.8, '55-74': 19.2, '75+': 8.5 }
    },
    {
        state: 'California', year: 2021, population: 39556223, medianAge: 36.7, medianIncome: 81200, ageDistribution: { '0-17': 21.8, '18-34': 23.7, '35-54': 26.5, '55-74': 19.5, '75+': 8.5 }
    },
    {
        state: 'California', year: 2022, population: 39682257, medianAge: 36.9, medianIncome: 84500, ageDistribution: { '0-17': 21.5, '18-34': 24.0, '35-54': 26.2, '55-74': 19.8, '75+': 8.5 }
    },
    {
        state: 'California', year: 2023, population: 40538223, medianAge: 37.1, medianIncome: 87200, ageDistribution: { '0-17': 21.2, '18-34': 24.3, '35-54': 25.9, '55-74': 20.1, '75+': 8.5 }
    },
    {
        state: 'California', year: 2024, population: 40546223, medianAge: 38.1, medianIncome: 87600, ageDistribution: { '0-17': 20.8, '18-34': 24.3, '35-54': 25.9, '55-74': 20.1, '75+': 8.5 }
    },
    // Texas
    {
        state: 'Texas', year: 2020, population: 29538223, medianAge: 39.5, medianIncome: 64700, ageDistribution: { '0-17': 20.1, '18-34': 25.4, '35-54': 26.8, '55-74': 19.8, '75+': 9.2 }
    },
    {
        state: 'Texas', year: 2021, population: 30556223, medianAge: 40.1, medianIncome: 65200, ageDistribution: { '0-17': 21.8, '18-34': 25.2, '35-54': 26.5, '55-74': 20.2, '75+': 9.2 }
    },
    {
        state: 'Texas', year: 2022, population: 30882455, medianAge: 39.8, medianIncome: 66500, ageDistribution: { '0-17': 20.2, '18-34': 24.7, '35-54': 26.2, '55-74': 20.1, '75+': 9.2 }
    },
    {
        state: 'Texas', year: 2023, population: 31537824, medianAge: 39.2, medianIncome: 67200, ageDistribution: { '0-17': 19.2, '18-34': 25.3, '35-54': 26.5, '55-74': 21.4, '75+': 9.2 }
    },
    {
        state: 'Texas', year: 2024, population: 31849283, medianAge: 38.8, medianIncome: 68300, ageDistribution: { '0-17': 19.8, '18-34': 25.8, '35-54': 26.9, '55-74': 21.1, '75+': 9.2 }
    },

    //
]


export const states = [...new Set(demographicData.map(item =>item.state))].sort();
export const years = [...new Set(demographicData.map(item =>item.year))].sort();