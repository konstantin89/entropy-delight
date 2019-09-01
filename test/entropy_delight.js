const Assert = require('assert');
const EntropyDelight = require('./../src/entropy_delight');

describe('Tests for CalculateEntropy', function() 
{
    it('Test buffer of zeros', function() 
    {
        let buf = Buffer.alloc(256, 0);

        let entropy = EntropyDelight.calculateEntropy(buf);

        //assert.equal(entropy);
    });
});