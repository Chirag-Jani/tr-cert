require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "localhost",
  // specifying the solidity version
  solidity: {
    version: "0.8.7",
    optimizer: {
      enabled: true,
      viaIR: true,
      runs: 50, // Update the number of runs to 200
    },
  },
  // specifying the network
  networks: {
    hardhat: {
      // specifying the chain id
      chainId: 31337,
    },

    // while deploying on test networks like Goerli, we can define it here - example is given below
    // goerli: {
    // chainId: 5, // this is the default chain id of Goerli Testnet
    // },
  },
  paths: {
    // these artifacts will help us to interact with deployed smart contract from the React frontend
    artifacts: "./src/artifacts",
  },
};