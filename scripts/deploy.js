const main = async () => {
  try {
    const nftContractFactory = await hre.ethers.getContractFactory(
      "nftNET42"
    );
    console.log(1)
    const nftContract = await nftContractFactory.deploy();
    console.log(2)
    await nftContract.deployed();

    console.log("Contract deployed to:", nftContract.address);
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
  
main();