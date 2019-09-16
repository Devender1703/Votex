pragma solidity ^0.5.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Candidate.sol";

contract CandidateTest
{
    Candidate candidateTest = Candidate(DeployedAddresses.Candidate());

    address candidate1 = 0x51a83037df00f392aFE0C89eD66c199bF9837A96;

    function testCandidateInfo() public
    {
        candidateTest.SetCandidateInfo(candidate1, "DDDD", 19);

        Assert.equal(candidateTest.GetCandidateName(candidate1), "DDDD", 'First candidate on List');
    }

    function testGetCandidateVote() public
    {   
        // Zero votes in starting
        Assert.equal(candidateTest.GetCandidateVotes(candidate1), 0, 'count of votes for candidate');
        candidateTest.GetVote(candidate1);

        // Count increases after voting
        Assert.equal(candidateTest.GetCandidateVotes(candidate1), 1, 'count of votes for candidate');
    }

}