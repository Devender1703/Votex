Votex = {

  web3Provider : null,

  Init: function() 
  {
    if(typeof web3 !== 'undefined') 
    {
      Votex.web3Provider = web3.currentProvider;
    } 
    else
    {
      Votex.web3Provider = new Web3.providers.HttpProvider('HTTP://127.0.0.1:7545');
    }
    web3 = new Web3(Votex.web3Provider);
    
    return Votex.initContract();
  },

  initContract : function()
  {
    web3.eth.defaultAccount = web3.eth.accounts[0];
    var candidateContract = web3.eth.contract([
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "candidateList",
      "outputs": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "age",
          "type": "uint256"
        },
        {
          "name": "totalVotes",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "candidateAddrList",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "candidateAddr",
          "type": "address"
        },
        {
          "name": "_name",
          "type": "string"
        },
        {
          "name": "_age",
          "type": "uint256"
        }
      ],
      "name": "SetCandidateInfo",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "GetCandidateName",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "GetCandidateVotes",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "candidateAddr",
          "type": "address"
        }
      ],
      "name": "GetVote",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]);

   var candidate = candidateContract.at('0xBf2Efc31C3Fbe13b0378a55704Bc024a7f3D4897');

   var voterContract = web3.eth.contract([
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "voterList",
      "outputs": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "age",
          "type": "uint16"
        },
        {
          "name": "voted",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "voterAddrList",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_voterAddress",
          "type": "address"
        },
        {
          "name": "_name",
          "type": "string"
        },
        {
          "name": "_age",
          "type": "uint16"
        }
      ],
      "name": "SetVoterInfo",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "GetVoterName",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_voterAddress",
          "type": "address"
        }
      ],
      "name": "GiveVote",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]);
   
   
   var voter = voterContract.at('0xB9F646e686b53210ee4aF3aCc9ee0043DB3e03e6');
   
   var organizerContract = web3.eth.contract([
    {
      "constant": true,
      "inputs": [],
      "name": "eventInfo",
      "outputs": [
        {
          "name": "eventName",
          "type": "string"
        },
        {
          "name": "totalCandidate",
          "type": "uint16"
        },
        {
          "name": "totalVoter",
          "type": "uint16"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_eventName",
          "type": "string"
        },
        {
          "name": "_totalCandidate",
          "type": "uint16"
        },
        {
          "name": "_totalVoter",
          "type": "uint16"
        }
      ],
      "name": "GetEventInfo",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_voterAddress",
          "type": "address"
        },
        {
          "name": "_candidateAddress",
          "type": "address"
        }
      ],
      "name": "SetVote",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "Result",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]);

  var organizer = organizerContract.at('0xefDF2774723050b347531B08ED9c454d005C88c4');
   

  }

}

$(function()
   {
     $(window).load(function(){
       Votex.Init();
     })
   }
)
