const request = require('supertest');
const app = require('./app');

describe("App is available", () => {
    it('GET / --> 200 with HTML response', () => {
        request(app)
        .get('/')
        .expect('Content-Type', /html/)
        .expect('Content-Length', '201')
        .expect(200)
        .end(function(err, res) {
            if (err) throw err;
        });
    })
})
