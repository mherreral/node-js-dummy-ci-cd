const { assert } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/index.js');

const expect = chai.expect;
const url = 'http://localhost:3000';
chai.use(chaiHttp);

describe('Test Suites', () => {
  let server;
  before(() => {
    server = app.listen(3000, () => {
      console.log('[TESTING ON PORT 3000]');
    });
  });

  after(() => {
    server.close();
  });

  describe('Unit::Server', () => {
    it('should return 200 OK', (done) => {
      chai
        .request(url)
        .get('/')
        .send()
        .end(function (err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
  });

  describe('Unit::Tasks', () => {
    it('should return a array of tasks', (done) => {
      chai
        .request(url)
        .get('/tasks')
        .send()
        .end(function (err, res) {
          expect(res.body).to.be.an('array');
          done();
        });
    });

    it('should add a task', (done) => {
      chai
        .request(url)
        .post('/tasks')
        .send({ task: 'test task' })
        .end(function (err, res) {
          assert(res.status === 201);
          expect(res.text).to.be.an('string').that.is.equal('test task - task added');
          done();
        });
    });

    it('should include the task in the list', (done) => {
      chai
        .request(url)
        .get('/tasks')
        .send()
        .end(function (err, res) {
          expect(res.body).to.include('test task');
          done();
        });
    });
  });
});
