const axios = require ('axios');
const {expect} = require ('chai')

describe('#indexOf()', async function () {
    it('should return -1 when the value is not present', async function () {
      const joke = await axios.get('https://api.chucknorris.io/jokes/random');
    
    console.log(joke);
    });
  });