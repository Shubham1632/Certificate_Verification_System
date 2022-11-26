const { ethers } = require("hardhat");
require("dotenv").config();
const fs = require("fs");

const address = process.env.address;
const prov = process.env.ganache_provider;
const id = 1;

async function getContract() {
  const data = await fs.promises.readFile(
    "artifacts/contracts/certify.sol/auth.json",
    "utf8"
  );
  const abi = JSON.parse(data)["abi"];
  const provider = ethers.getDefaultProvider(prov);
  const sso = new ethers.Contract(address, abi, provider);
  return sso;
}

async function getdata() {
  const contract = await getContract();
  const userinfo = await contract.retrive(id);
  console.log(`${userinfo}`);
}

getdata().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
