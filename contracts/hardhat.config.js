require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString().trim();
module.exports = {
	defaultNetwork: "matic",
	networks: {
		hardhat: {},
		matic: {
			url: "https://rpc-mumbai.maticvigil.com",
			accounts: [`0x${privateKey}`],
		},
	},
	etherscan: {
		apiKey: "T7EJKK22HARAGKTIQKGNVDJ3YSV6SET5C8",
	},
	solidity: {
		version: "0.8.13",
		settings: {
			optimizer: {
				enabled: true,
				runs: 200,
			},
		},
	},
};
