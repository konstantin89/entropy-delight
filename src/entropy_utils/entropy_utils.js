class EntropyUtils
{
    /**
     * 
     * @param {Buffer} buf 
     * @returns {Array}
     */
    static countBytes(buf)
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
    static calcFrequency(countedArray, bufferLength)
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
    static calcShanonEntropy(frequencyArray)
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

module.exports = EntropyUtils;