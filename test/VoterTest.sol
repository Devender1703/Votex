pragma solidity ^0.5.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Voter.sol";

contract VoterTest
{   
     
    Voter voterTest = Voter(DeployedAddresses.Voter()); 

    function TestVoterInfo() public
    {    // voter 1
       voterTest.SetVoterInfo(0x1D4E8Dc4282cb776d45Aba163303BF0c9D81e37A, "AAAA", 19);
       // voter 2
       voterTest.SetVoterInfo(0x6140a6adD5d196f0466602602f68A91b21aE7341, "BBBB", 19);
       // voter 3
       voterTest.SetVoterInfo(0x00E378C26fa3C89CC6B723cc5C6ea1B07ef19f55, "CCCC", 20);
       
       Assert.equal(voterTest.GetVoterName(0), "AAAA", 'First Voter in list');
       Assert.equal(voterTest.GetVoterName(1), "BBBB", 'Second Voter in list');
       Assert.equal(voterTest.GetVoterName(2), "CCCC", 'Third Voter in list');
    }
}