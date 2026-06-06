const { ethers } = require("ethers");
const mnemonic = "confirm behave monster acquire cheap print west home opera card case region";
const wallet = ethers.Wallet.fromMnemonic(mnemonic, "m/44'/60'/0'/0/0");
console.log("Address:", wallet.address);
console.log("Private Key:", wallet.privateKey);
