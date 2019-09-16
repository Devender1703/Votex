pragma solidity ^0.5.0;

import "./Voter.sol";
import "./Candidate.sol";

contract Organizer
{
    struct EventInfo
    {
        string eventName;
        uint16 totalCandidate;
        uint16 totalVoter;
    }

    EventInfo public eventInfo;
    uint private res = 0;
    string private winner;

    function GetEventInfo(string memory _eventName, uint16 _totalCandidate, uint16 _totalVoter)
    public
    {
        eventInfo.eventName = _eventName;
        eventInfo.totalCandidate = _totalCandidate;
        eventInfo.totalVoter = _totalVoter;
    }

    Candidate instanceCandidate;
    Voter instanceVoter;

    function SetVote(address _voterAddress, address _candidateAddress) public
    {
        instanceVoter.GiveVote(_voterAddress);
        instanceCandidate.GetVote(_candidateAddress);
    }

    function Result() public returns(string memory)
    {
        for(uint8 i = 0; i < eventInfo.totalCandidate; i++)
        {
           address addr = instanceCandidate.candidateAddrList(i);

           if(res < instanceCandidate.GetCandidateVotes(addr))
           {
               res = instanceCandidate.GetCandidateVotes(addr);
               winner = instanceCandidate.GetCandidateName(addr);
           }
        }

        return winner;
    }
}
