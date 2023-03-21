let chai = require('chai');
let chaiHttp = require('chai-http');
var assert = require('assert');
let app = require('../../src/index.js');

const expect = chai.expect;
const url = 'http://localhost:3000';
chai.use(chaiHttp);

describe('Integration::Server', () => {
  let server;
  before(() => {
    server = app.listen(3000, () => {
      console.log('Server for testing is running on port 3000');
    });
  });
  after(() => {
    server.close();
  });
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
