/**
 * @type import('hardhat/config').HardhatUserConfig
 */

 require('@nomiclabs/hardhat-waffle');

//  const INFURA_URL = 'https://eth-rinkeby.gateway.pokt.network/v1/5fff8b3c24d382002f2daeaa';
//  const PRIVATE_KEY=''

 module.exports = {
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {
    },
    rinkeby: {
      url: 'https://eth-rinkeby.gateway.pokt.network/v1/5fff8b3c24d382002f2daeaa',
      accounts: {mnemonic: ''}
    } 
  },
  solidity: {
    version: "0.7.3",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./frontend/src/artifacts"
  },
  mocha: {
    timeout: 20000
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: ""
  }
}