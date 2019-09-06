const EntropyDelight = require('./../src/entropy_delight');

const Chai = require('chai');
var Assert = Chai.assert;

describe('Tests for CalculateEntropy', function() 
{
    it('Test buffer of zeros', function() 
    {
        let zeroBuf = Buffer.alloc(32, 0);
        let entropy = EntropyDelight.calculateEntropy(zeroBuf);
        Assert.equal(entropy, 0);
    });

    it('Test buffer of normal distributed numbers', function() 
    {
        let randBuffer = Buffer.alloc(256, 0);
        for(let i=0; i<randBuffer.length; i++)
        {
            randBuffer[i] = i;
        }

        let entropy = EntropyDelight.calculateEntropy(randBuffer);
        Assert.equal(entropy, 8);
    });

    it('Test buffer of random numbers', function() 
    {
        let randBuffer = Buffer.alloc(1024, 0);
        for(let i=0; i<randBuffer.length; i++)
        {
            randBuffer[i] = Math.floor(Math.random() * Math.floor(256));
        }

        let entropy = EntropyDelight.calculateEntropy(randBuffer);

        console.log(entropy);

        //assert.equal(entropy);
    });
    
});