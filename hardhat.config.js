require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("hardhat-gas-reporter");

/** @type import('hardhat/config').HardhatUserConfig */

const provider = process.env.ganache_provider;
const key = process.env.ganache_local_key;
const coinmarket_api_key = process.env.coinmarkestcap;

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "hardhat",
  networks: {
    ganache: {
      url: provider,
      accounts: [key],
      chainId: 1337,
    },
  },
  gasReporter: {
    enabled: true,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "INR",
    coinmarketcap: coinmarket_api_key,
    token: "MATIC",
  },
};
