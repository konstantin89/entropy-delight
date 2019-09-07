const EntropyDelight = require('./../src/entropy_delight');

const Chai = require('chai');
var Assert = Chai.assert;

describe('Tests for CalculateEntropy', function() 
{
    it('Test buffer of zeros', function() 
    {
        let zeroBuf = Buffer.alloc(32, 0);
        let entropyObj = EntropyDelight.calculateEntropy(zeroBuf);

        Assert.equal(entropyObj.entropy, 0);
        Assert.equal(entropyObj.frequency.length, 256);
        Assert.equal(entropyObj.frequency[0], 1);
    });

    it('Test buffer of normal distributed numbers', function() 
    {
        let normBuffer = Buffer.alloc(256, 0);
        for(let i=0; i<normBuffer.length; i++)
        {
            normBuffer[i] = i;
        }

        let entropyObj = EntropyDelight.calculateEntropy(normBuffer);

        Assert.equal(entropyObj.entropy, 8);
        Assert.equal(entropyObj.frequency.length, 256);

        for(let i=0; i<entropyObj.frequency.length; i++)
        {
            Assert.equal(entropyObj.frequency[i], 1/256);
        }
        
    });

    it('Test buffer of random numbers', function() 
    {
        let randBuffer = Buffer.alloc(1024, 0);
        for(let i=0; i<randBuffer.length; i++)
        {
            randBuffer[i] = Math.floor(Math.random() * Math.floor(256));
        }

        let entropyObj = EntropyDelight.calculateEntropy(randBuffer);

        Assert.equal(entropyObj.frequency.length, 256);
        Assert.isAbove(entropyObj.entropy, 0);
        Assert.isAtMost(entropyObj.entropy, 8);

        let totalFreq = 0;

        for(let i=0; i<entropyObj.frequency.length; i++)
        {
            totalFreq += entropyObj.frequency[i];
        }
        
        Assert.equal(totalFreq, 1);
    });
    
});