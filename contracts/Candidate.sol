pragma solidity >= 0.4.0 < 0.7.0;

contract Candidate
{
    struct CandidateInfo
    {
        string name;
        uint age;
        uint totalVotes;
        // other info
    }

    mapping(address => CandidateInfo) CandidateList;

    function SetCandidateInfo(address candidateAddr, string memory _name, uint _age, uint _totalVotes) public view 
    {
        CandidateInfo memory candidate = CandidateList[candidateAddr];
        candidate.name = _name;
        candidate.age = _age;
        candidate.totalVotes = _totalVotes;
    }

    function GetVote(address candidateAddr) public view
    {
        CandidateInfo memory candidate = CandidateList[candidateAddr];
        candidate.totalVotes += 1;
    }

    function GetResult(address candidateAddr) public view returns(uint)
    {
        CandidateInfo memory candidate = CandidateList[candidateAddr];
        return candidate.totalVotes; 
    }
}