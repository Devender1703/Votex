pragma solidity ^0.5.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Voter.sol";

contract VoterTest
{   
     
    Voter voterTest = Voter(DeployedAddresses.Voter()); 
    
    address voter1 = 0x1D4E8Dc4282cb776d45Aba163303BF0c9D81e37A;
    address voter2 = 0x00E378C26fa3C89CC6B723cc5C6ea1B07ef19f55;
    
    function testVoterInfo() public
    {
       
       voterTest.SetVoterInfo(voter1, "AAAA", 19);
       voterTest.SetVoterInfo(voter2, "BBBB", 19);

       Assert.equal(voterTest.GetVoterName(voter1), "AAAA", 'First Voter in list');
       Assert.equal(voterTest.GetVoterName(voter2), "BBBB", 'Second Voter in list');
    }

    function testGiveVote() public
    {
        Assert.equal(voterTest.GiveVote(voter1), voter1, 'Sender of Voter');
    }

}