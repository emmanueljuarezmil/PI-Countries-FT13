module.exports = function(name, difficult, duration, season, countriesIds) {
    const seasons = ['Verano', 'Otoño', 'Primavera', 'Invierno']
    if(!name || typeof name !== 'string') return true
    if(difficult && (typeof difficult !== 'number' || difficult < 1 || difficult > 5)) return true
    if(duration && (typeof duration !== 'number' || duration < 0)) return true
    if(season && !seasons.includes(season)) return true
    if(!Array.isArray(countriesIds) || countriesIds.length === 0) return true
    return false
}