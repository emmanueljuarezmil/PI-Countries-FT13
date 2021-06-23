/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  name: 'Argentina',
};

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  const country = {
    id: 'EWQ',
    name: 'Pais inventado',
    flag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlA3cchwxrZZwG8E8nUxND9Lr-VVXwXJT2LlrujHiO0f6It_ltj1nDu4c5MzJzZZst1sE&usqp=CAU',
    continent: 'Americas',
    capital: 'Sarasa',
    subregion: 'South america',
    poblation: 4350000
  }
  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.create(country)));
  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
  });
});
