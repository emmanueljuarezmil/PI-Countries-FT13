const { Router } = require('express');
const express = require('express');
const axios = require('axios')
const {Country, Activity} = require('../db')


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.use(express.json())


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



//                          BACK

// [BACK] GET /countries:
// X En una primera instancia deberán traer todos los países desde restcountries y guardarlos en su propia base de datos y luego ya utilizarlos desde allí (Debe almacenar solo los datos necesarios para la ruta principal)
// Obtener un listado de los primeros 10 países

// [BACK] GET /countries?name="...":
// Obtener los países que coincidan con el nombre pasado como query parameter (No necesariamente tiene que ser una matcheo exacto)
// Si no existe ningún país mostrar un mensaje adecuado


//                          FRONT

// Ruta principal: debe contener
// [BACK] Input de búsqueda para encontrar países por nombre
// [FRONT] Área donde se verá el listado de países. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta GET /countries y deberá mostrar su:
// Imagen de la bandera
// Nombre
// Continente
// 
// [FRONT] Botones/Opciones para filtrar por continente y por tipo de actividad turística
// [BACK] Botones/Opciones para ordenar tanto ascendentemente como descendentemente los países por orden alfabético y por cantidad de población
// [FRONT] Paginado para ir buscando y mostrando los siguientes paises


// vamo con los casos:

// default: mandar solo los primeros 10 paises, sin filtro ni ordenamiento ni nada
// ordenamiento desde el back: mandar todo ordenado por nombre del pais alfabetico o por cantidad de poblacion (asc o desc)
// filtrado desde el front: mandar todo y ahi filtrar o paginar desde el front


// mandar entonces desde el back

// Pais: id pais, nombre, imagen de la bandera, continente, poblacion, ids de actividades relacionadas
// Actividades: id actividad, nombre



router.get('/countries', async (req,res,next) => {
    const {name} = req.query
    const {pagedOrOrder, orderBy, orderType} = req.body
    if(!name && !pagedOrOrder) {
        // no hay nombre para buscar pais, ni variable de paginado ordenado, mando los primeros 10
        const countries = await Country.findAll({limit: 10, attributes:['id', 'name', 'flag', 'continent', 'poblation']})
        return res.json(countries)
    }
    if(!name) {
        // no hay nombre de pais pero si hay variable de que hay paginado u ordenado
    }
    if(!pagedOrOrder) {
        // hay nombre de pais para buscar, pero no variable de que hay paginado u ordenado
    }
    res.send('ok')

})






//                          BACK

// [BACK] GET /countries/{idPais}:
// Obtener el detalle de un país en particular
// Debe traer solo los datos pedidos en la ruta de detalle de país
// Incluir los datos de las actividades turísticas correspondientes


//                          FRONT

// Ruta de detalle de país: debe contener
// [ ] Los campos mostrados en la ruta principal para cada país (imagen de la bandera, nombre, código de país de 3 letras y continente)
// [ ] Código de país de 3 letras (id)
// [ ] Capital
// [ ] Subregión
// [ ] Área (Mostrarla en km2 o millones de km2)
// [ ] Población
// [ ] Actividades turísticas con toda su información asociada


router.get('/countries/:id', async (req,res,next) => {
    const {id} = req.params
    if(!id) {
        return res.status(404).send('Ups, el id no es valido')
    }
    const country = await Country.findByPk(id)
    return res.send(country)
})






//                          BACK

// [BACK] POST /activity:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
// Crea una actividad turística en la base de datos


//                          FRONT

// Ruta de creación de actividad turística: debe contener
// [ ] Un formulario controlado con los siguientes campos
// Nombre
// Dificultad
// Duración
// Temporada
// [ ] Posibilidad de seleccionar/agregar varios países en simultaneo
// [ ] Botón/Opción para crear una nueva actividad turística


router.post('/activity', (req,res,next) => {
    const {name, difficult, duration, season, description, countriesId} = req.body
    if(!name || !difficult || typeof difficult !== 'number' || difficult > 5 || difficult < 1 || typeof duration !== 'number' || !duration || !countriesId.length) {
        return res.status(400).send('Datos incorrectos')
    }
    if(!season) season = null
    if(!description) description = null
    
})


module.exports = router;
