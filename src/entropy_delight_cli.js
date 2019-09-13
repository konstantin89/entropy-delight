const fs = require('fs');

const argv = require('yargs')
    .usage('Usage: $0 --file [string]')
    .demandOption(['file'])
    .argv;

let EntropyDelight = require('./entropy_delight');

/**
 * @param {string} fileName 
 * @param {EntropyData} entropyData 
 */
let printFileReport = (fileName, entropyData)=>
{
    console.log('Path: ', fileName);
    console.log('Entropy: ', entropyData.entropy);
}

/**
 * 
 * @param {argv} argv 
 */
let runCommandLineTool = (argv)=>
{
    try
    {
        let fileContent = fs.readFileSync(argv.file);
        let entropyData /**  @type {EntropyData} */ = EntropyDelight.calculateEntropy(fileContent);
        printFileReport(argv.file, entropyData);
    }
    catch(err)
    {
        let errorMsg = err.message || err;
        console.log('Exception: ', errorMsg);
    }
    
}

runCommandLineTool(argv);