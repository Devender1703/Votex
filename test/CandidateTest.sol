pragma solidity ^0.5.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Candidate.sol";

contract CandidateTest
{
    Candidate candidateTest = Candidate(DeployedAddresses.Candidate());

    function TestCandidateInfo() public
    {
        candidateTest.SetCandidateInfo(0x51a83037df00f392aFE0C89eD66c199bF9837A96, "DDDD", 19);

        Assert.equal(candidateTest.GetCandidateName(0), "DDDD", 'First candidate on List');
    }

}