const request = require('supertest');
const app = require('../app');
const db = require('../db');
const sampleResponse = require('./opreturn/sampleResponse.json')

describe("OP_RETURN Lookup", () => {

    it('GET /opreturn --> 404 with json response', () => {
        request(app)
        .get('/opreturn')
        .expect('Content-Type', /json/)
        .expect('Content-Length', '132')
        .expect(404)
        .end(function(err, res) {
            if (err) throw err;
        });
    })

    it('GET /opreturn/${opReturnData} --> 404 if not found', () => {
        request(app)
        .get('/opreturn/12345')
        .expect('Content-Type', /json/)
        .expect('Content-Length', '51')
        .expect(404)
        .end(function(err, res) {
            if (err) throw err;
        });
    })

    it('GET /opreturn/${opReturnData} --> validate request payload', () => {
        request(app)
        .get('/opreturn/12345-67890')
        .expect('Content-Type', /json/)
        .expect('Content-Length', '106')
        .expect(400)
        .end(function(err, res) {
            if (err) throw err;
        });
    })

    it('GET /opreturn/${opReturnData} --> JSON transaction and block hash data',
        () => {
            request(app)
            .get(`/opreturn/${sampleResponse.op_return}`)
            .expect('Content-Type', /json/)
            .expect('Content-Length', '2156')
            .expect(200)
            .end(function(err, res) {
                if (err) throw err;
            });
        })

    afterAll(async () => {
        setTimeout(async () => {
            await db.close();
        }, 100);
    })
})
