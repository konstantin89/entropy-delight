# entropy-delight

## Brief
Nodejs package of utilities related to calculation of entropy of binary data.

## Entropy 

Entropy is the measurement of the randomness. The concept originated   
in the field of thermodynamics, but it has few usages in computer science.

Large file entropy results in small compresion ratio for the file,  
since the file have large degree of randomness in it.

Determining the entropy of a file is also useful to detect if it is likely   
to be encrypted.

## Command line tool

This module implements command line tool that can be used for calculating    
entopy of files. 

The following command example, can be used for calculating file entropy.

``` bash
node ./src/entropy_delight_cli.js --file [file_name]
```


## Testing

Before running the tests for this module make sure to install mocha.
``` bash
 npm install --global mocha
 ```

 Once mocha is installed, run the command below.
 ``` bash
npm test
 ```