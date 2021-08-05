const {Country} = require('../db')
const axios = require('axios')

module.exports = async function() {
    try {
        const {data} = await axios.get('https://restcountries.eu/rest/v2/all')
        data.forEach(async country => 
            await Country.create({id: country.alpha3Code,
                name: country.translations.es ? country.translations.es : country.name,
                flag: country.flag,
                continent: country.region !== '' ? country.region : 'Otros',
                capital: country.capital,
                subregion: country.subregion,
                area: country.area ? country.area : 0,
                poblation: country.population ? country.population : 0
            })
        )
        console.log('Paises precargados en la base de datos')
    } catch(err) {
        console.error(err)
    }
}