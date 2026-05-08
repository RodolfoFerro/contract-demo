const { expect } = require("chai");

describe("CasaToken contract tests", function () {
  it("Deployment should assign the name and symbol", async function () {
    // Contract deployment
    const [owner, addr1] = await ethers.getSigners();
    const casaToken = await ethers.deployContract("CasaToken");

    // Example to obtain addresses
    console.log(owner.address);
    console.log(addr1.address);

    // Test starts here!
    const tokenName = await casaToken.name();
    const tokenSymbol = await casaToken.symbol();
    
    expect(tokenName).to.equal("CasaToken");
    expect(tokenSymbol).to.equal("CTK");
  });

  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();

    const casaToken = await ethers.deployContract("CasaToken");

    const ownerBalance = await casaToken.balanceOf(owner.address);
    expect(await casaToken.totalSupply()).to.equal(ownerBalance);
  });
});