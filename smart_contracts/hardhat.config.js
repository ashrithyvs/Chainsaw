//https://eth-ropsten.alchemyapi.io/v2/7NWSwAAQxNgKrZKmXhHBwMt88Sk85TC6

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/7NWSwAAQxNgKrZKmXhHBwMt88Sk85TC6",
      accounts: [
        "5ab13391216caaf8fd9429bdfb96f193e8ffdc25654d013645771845a29b389f",
      ],
    },
  },
};
