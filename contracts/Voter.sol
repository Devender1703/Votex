pragma solidity ^0.5.0;

contract Voter
{
    struct voterInfo
    {
        string name;
        uint16 age;
        bool voted;
    }

    mapping(address => voterInfo) public voterList;
    address[] public voterAddrList;

    function SetVoterInfo(address _voterAddress, string memory _name, uint16 _age) 
    public
    {
        voterList[_voterAddress].name = _name;
        voterList[_voterAddress].age = _age;
        voterList[_voterAddress].voted = false;

        voterAddrList.push(_voterAddress); 
    }
    
    function GetVoterName(address addr) public view returns(string memory)
    {   
        return (voterList[addr].name);
    }

    function GiveVote(address _voterAddress) public returns(address)
    {
        require(voterList[_voterAddress].voted != true, "Voter already voted");

        voterList[_voterAddress].voted = true;
        return(_voterAddress);
    }


}