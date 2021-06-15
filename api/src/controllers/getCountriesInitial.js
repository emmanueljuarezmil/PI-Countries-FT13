const {Country} = require('../db')
const axios = require('axios')

module.exports = async function() {
    await axios.get('https://restcountries.eu/rest/v2/all').then(response => {
            response.data.forEach(country => 
                Country.create({id: country.alpha3Code,
                    name: country.translations.es ? country.translations.es : country.name,
                    flag: country.flag,
                    continent: country.region,
                    capital: country.capital,
                    subregion: country.subregion,
                    area: country.area !== null ? country.area : 0,
                    poblation: country.population !== null ? country.population : 0
                })
            )
        })
        .then(() =>{
            console.log('Ciudades precargadas en la base de datos!')
        })
        .catch(err => console.error(err))
}