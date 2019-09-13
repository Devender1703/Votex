const Organizer = artifacts.require("./Organizer.sol");
const Migrations = artifacts.require("./Migrations.sol");
const Candidate = artifacts.require("./Candidate.sol");
const Voter = artifacts.require("./Voter.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Candidate);
  deployer.deploy(Voter);
  deployer.deploy(Organizer);
};
