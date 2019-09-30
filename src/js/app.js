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
   //console.log(candidate);

   $("#candidate-button").click(function() {
     //console.log(candidate);
    candidate.SetCandidateInfo($("#candidateAddress").val(), $("#candidateName").val(), $("#candidateAge").val());
    $('#CandidateForm').find('input:text').val('');
  });


  }

}

$(function()
   {
     $(window).load(function(){
       Votex.Init();
     })
   }
)
