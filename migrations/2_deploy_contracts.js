const DKoin = artifacts.require("../contracts/DKoin.sol");
const TokenSale = artifacts.require("../contracts/TokenSale.sol");
module.exports = function (deployer) {
  deployer.deploy(DKoin, 5000000).then(function(){
    //.001 ether
    tokenPrice = 1000000000000000000;
    return deployer.deploy(TokenSale, DKoin.address, tokenPrice)
  });
};
