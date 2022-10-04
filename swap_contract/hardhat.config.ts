import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@typechain/hardhat";
require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: "0.8.0",
  networks: {
    testnet_aurora: {
      url: "https://testnet.aurora.dev",
      accounts: [process.env.AURORA_PRIVATE_KEY!],
    },
  },
};

export default config;
