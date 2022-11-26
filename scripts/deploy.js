const hre = require("hardhat");

async function main() {
  const Certify = await hre.ethers.getContractFactory("auth");
  const certify = await Certify.deploy();

  await certify.deployed();

  console.log(` deployed to ${certify.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
