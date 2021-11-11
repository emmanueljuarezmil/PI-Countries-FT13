//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { FORCE, PORT } = process.env
const force = JSON.parse(FORCE)
// const { getAllCountriesFromApi, chargeInitialActivities } = require('./src/controllers')

// Syncing all the models at once.
conn.sync({ force })
// .then(() => force ? getAllCountriesFromApi() : null)
// .then(() => force ? chargeInitialActivities() : null)
.then(() => {
  server.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`); // eslint-disable-line no-console
  })
})
.catch((err) => console.error(err))
