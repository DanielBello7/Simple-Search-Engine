


const { expect } = require('chai');
const { describe, it } = require('mocha');
const advanced_query_search = require('../modules/advanced_search');


describe('running simulations on search', () => {

  it('should return an array', async () => {
    
    const result = await advanced_query_search(['a', 'b'], 'b');

    return expect(result).to.be.an('array');
  });

});