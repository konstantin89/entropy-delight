class EntropyDelight
{
    /**
     * 
     * @param {Buffer} data
     */
    static calculateEntropy(buf)
    {

        if(buf.length === 0)
        {
            return 0;
        }

        let countArray = EntropyDelight._countBytes(buf);
        let freqArray = EntropyDelight._calcFrequency(countArray, buf.length);
        let entropy = EntropyDelight._calcShanonEntropy(freqArray);

        return entropy;
    }

    /**
     * 
     * @param {Buffer} buf 
     * @returns {Array}
     */
    static _countBytes(buf)
    {
        let arr = Array();
        for(let i=0; i<256; i++)
        {
            arr.push(0);
        }

        for(let byte of buf)
        {
            arr[byte] = arr[byte] + 1;
        }

        return arr;
    }

    /**
     * 
     * @param {Array} countedArray 
     * @param {number} bufferLength 
     */
    static _calcFrequency(countedArray, bufferLength)
    {
        let freqArray = countedArray.slice();
        
        for(let i=0; i<freqArray.length; i++)
        {
            freqArray[i] = freqArray[i] / bufferLength;
        }

        return freqArray;
    }

    /**
     * 
     * @param {Array} frequencyArray 
     */
    static _calcShanonEntropy(frequencyArray)
    {
        let entropy = 0;

        for(let freq of frequencyArray)
        {
            if(freq === 0)
            {
                continue;
            }

            entropy = entropy + freq*Math.log2(freq);
        }
            
        return -entropy;
    }
}

module.exports = EntropyDelight;