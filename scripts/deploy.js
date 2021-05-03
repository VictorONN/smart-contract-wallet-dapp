
RINKEBY_COMPTROLLER_ADDRESS='0xe4cd9a61431fbd268ea842d68533561262c17513'
RINKEBY_CETH_ADDRESS='0xd6801a1dffcd0a410336ef88def4320d6df1883e'

async function main() {
    // We get the contract to deploy
    const Wallet = await ethers.getContractFactory("Wallet");
    const wallet = await Wallet.deploy(RINKEBY_CETH_ADDRESS, RINKEBY_COMPTROLLER_ADDRESS);
  
    console.log("Wallet deployed to:", wallet.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
  
    //0x5c5689ed52df4d1c4f66BaF25eBE6442FFf5Ca36