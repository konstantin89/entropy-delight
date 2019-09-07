const EntropyUtils = require('./entropy_utils/entropy_utils'); 

/**
 * @typedef {Object} EntropyData
 * @property {number} entropy  - Number that represents the calculated entropy.
 * @property {Array} frequency - Array that contains the frequency of each byte. 
 */

class EntropyDelight
{
    /**
     * @brief Method that calculates entropy of given buffer.
     * @param {Buffer} data
     * @returns {EntropyData}
     */
    static calculateEntropy(buf)
    {
        if(buf.length === 0)
        {
            return 0;
        }

        let countArray = EntropyUtils.countBytes(buf);
        let freqArray = EntropyUtils.calcFrequency(countArray, buf.length);
        let entropy = EntropyUtils.calcShanonEntropy(freqArray);

        let /** @type {EntropyData} */ returnObj = {
            entropy: entropy,
            frequency: freqArray
        };

        return returnObj;
    }

}

module.exports = EntropyDelight;