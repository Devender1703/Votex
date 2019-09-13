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

    function SetCandidateInfo(address candidateAddr, string memory _name, uint _age, uint _totalVotes) public
    {
        candidateList[candidateAddr].name = _name;
        candidateList[candidateAddr].age = _age;
        candidateList[candidateAddr].totalVotes = _totalVotes;
    }

    function GetVote(address candidateAddr) public
    {
        candidateList[candidateAddr].totalVotes += 1; 
    }
}
