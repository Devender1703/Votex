const Migrations = artifacts.require("./Migrations.sol");
const Voting = artifacts.require("./Voting.sol");

module.exports = function(deployer) {
    deployer.deploy(Migrations);
    deployer.deploy(Voting);
};
