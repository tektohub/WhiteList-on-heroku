/**
* Use this file to configure your truffle project. It's seeded with some
* common settings for different networks and features like migrations,
* compilation and testing. Uncomment the ones you need or modify
* them to suit your project as necessary.
*
* More information about configuration can be found at:
*
* truffleframework.com/docs/advanced/configuration
*
* To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
* to sign your transactions before they're sent to a remote public node. Infura accounts
* are available for free at: infura.io/register.
*
* You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
* public/private key pairs. If you're publishing your code to GitHub make sure you load this
* phrase from a file you've .gitignored so it doesn't accidentally become public.
*
*/
 
const path = require("path");
const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();
 
module.exports = {
 contracts_build_directory: path.join(__dirname, "client/src/contracts"),
 networks: {

   development: {
     host: "127.0.0.1",
     port: 8545,
     network_id: "*", 
   },
   ropsten: {
     provider: function() {
       return new HDWalletProvider(`${process.env.MNEMONIC}`, `https://ropsten.infura.io/v3/${process.env.INFURA_ID}`)
     },
     network_id: 3
   },
 },
 
 // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

 // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.7",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
       settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: false,
          runs: 200
        },
      //  evmVersion: "byzantium"
       }
    }
  },

  };