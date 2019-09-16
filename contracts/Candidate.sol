pragma solidity ^0.5.0;

contract Candidate
{
    struct CandidateInfo
    {
        string name;
        uint age;
        uint totalVotes;
        // other info
    }

    mapping(address => CandidateInfo) public candidateList;
    address[] public candidateAddrList;

    function SetCandidateInfo(address candidateAddr, string memory _name, uint _age) public
    {
        candidateList[candidateAddr].name = _name;
        candidateList[candidateAddr].age = _age;
        candidateList[candidateAddr].totalVotes = 0;

        candidateAddrList.push(candidateAddr);
    }

    function GetCandidateName(address addr) public view returns(string memory)
    {
        return candidateList[addr].name;
    }

    function GetCandidateVotes(address addr) public view returns(uint)
    {
        return candidateList[addr].totalVotes;
    }

    function GetVote(address candidateAddr) public
    {
        candidateList[candidateAddr].totalVotes += 1; 
    }
}
