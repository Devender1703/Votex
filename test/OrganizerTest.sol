pragma solidity ^0.5.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Organizer.sol";

contract OrganizerTest
{
    Organizer organizerTest = Organizer(DeployedAddresses.Organizer());
    // No Tests for Info function
 
    string candidate1 = "AAAA";
    address addr1 = 0x51a83037df00f392aFE0C89eD66c199bF9837A96;

    string candidate2 = "BBBB";
    address addr2 = 0x5Fc4b22680CB4654517bf651EA28ed705A786659;

    string candidate3 = "CCCC";
    address addr3 = 0x5817A1F21514aCe31EC89c6192BfF05d21157fc2;

    string Voter1 = "DDDD";
    address addr4 = 0x1D4E8Dc4282cb776d45Aba163303BF0c9D81e37A;

    string Voter2 = "EEEE";
    address addr5 = 0x6140a6adD5d196f0466602602f68A91b21aE7341;

    string Voter3 = "FFFF";
    address addr6 = 0x00E378C26fa3C89CC6B723cc5C6ea1B07ef19f55; 

    function testResult() public 
    {
        organizerTest.SetVote(addr4, addr1);
        organizerTest.SetVote(addr5, addr1);
        organizerTest.SetVote(addr6, addr2);

        string memory winner = organizerTest.Result();

        Assert.equal(winner, candidate1, 'Winner Name');
    }

}