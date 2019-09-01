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
        console.log(freqArray);

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

    static _calcFrequency(countedArray, bufferLength)
    {
        let freqArray = countedArray.slice();
        
        for(let i=0; i<freqArray.length; i++)
        {
            freqArray[i] = freqArray[i] / bufferLength;
        }

        return freqArray;
    }
}

module.exports = EntropyDelight;