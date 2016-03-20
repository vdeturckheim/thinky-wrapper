'use strict';
const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

const Thinky = require('../');

describe('Module', () => {

    it('should create a new connection to rethinkdb', { plan: 2 } ,(done) => {

        const instance = Thinky({ db: 'aa' });
        expect(instance).to.exist();
        expect(instance._config.db).to.equal('aa');
        done();
    });

    it('should get the previous connection to rethinkdb', { plan: 2 } ,(done) => {

        const instance = Thinky();
        expect(instance).to.exist();
        expect(instance._config.db).to.equal('aa');
        done();
    });
});
