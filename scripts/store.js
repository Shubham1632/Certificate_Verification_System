const { soliditySha256 } = require("ethers/lib/utils");
const { ethers } = require("hardhat");
require("dotenv").config();
const fs = require("fs");
const { getIndexedSignatureForEvent } = require("typechain");

const address = process.env.address;
const prov = process.env.ganache_provider;
const local_key = process.env.ganache_local_key;

async function getContract() {
  const data = await fs.promises.readFile(
    "artifacts/contracts/certify.sol/auth.json",
    "utf8"
  );
  const abi = JSON.parse(data)["abi"];
  const provider = ethers.getDefaultProvider(prov);
  const signer = new ethers.Wallet(local_key, provider);
  const sso = new ethers.Contract(address, abi, signer);
  return sso;
}

const name = "Shubham";
const subject = "Blockchain";
const duration = "2 months";
const id = 1;

async function store() {
  const sso = await getContract();
  const newuser = await sso.store(id, name, subject, duration);
  await newuser.wait(1);
  console.log(`The user is sucssesfully registerd`);
  const curruser = await sso.retrive(id);
  console.log(`The registered user is : ${curruser}`);
}

store().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
