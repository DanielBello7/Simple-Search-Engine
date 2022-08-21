


const { expect } = require('chai');
const { describe, it } = require('mocha');
const advanced_query_search = require('../modules/advanced_search');


describe('running simulations on search', () => {

  it('should return an array', async () => {
    const data = ['a', 'b'];
    const result = await advanced_query_search(data, 'b');
    return expect(result).to.be.an('array').that.contains('b');
  });

  it('should return {name: "james", age: 23}', async () => {
    const data = [
      {
        name: "john", 
        age: 25
      },
      {
        name: "james", 
        age: 23
      },
    ];
    const result = await advanced_query_search(data, "james");
    expect(result).to.include(data[1]);
  });

  it('should return empty []', async () => {

    const data = [
      {
        name: "john", 
        age: 25
      },
      {
        name: "james", 
        age: 23
      },
    ];

    const result = await advanced_query_search(data, "g");
    expect(result).to.eql([])
  });
});