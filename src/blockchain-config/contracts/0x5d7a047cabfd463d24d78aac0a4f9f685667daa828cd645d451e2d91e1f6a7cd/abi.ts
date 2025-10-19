import type { Abi } from "viem";

export const abi = [
  {
    "type": "constructor",
    "inputs": [
      {
        "name": "gitCommit",
        "type": "bytes20",
        "internalType": "bytes20"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "name": "ActionInvalid",
    "type": "error",
    "inputs": [
      {
        "name": "i",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "action",
        "type": "bytes4",
        "internalType": "bytes4"
      },
      {
        "name": "data",
        "type": "bytes",
        "internalType": "bytes"
      }
    ]
  },
  {
    "name": "BoughtSellToken",
    "type": "error",
    "inputs": [
      {
        "name": "sellToken",
        "type": "address",
        "internalType": "contract IERC20"
      }
    ]
  },
  {
    "name": "CallbackNotSpent",
    "type": "error",
    "inputs": [
      {
        "name": "callbackInt",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "name": "ConfusedDeputy",
    "type": "error",
    "inputs": []
  },
  {
    "name": "DeltaNotPositive",
    "type": "error",
    "inputs": [
      {
        "name": "token",
        "type": "address",
        "internalType": "contract IERC20"
      }
    ]
  },
  {
    "name": "ForwarderNotAllowed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidOffset",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidSignatureLen",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidTarget",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotConverged",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PayerSpent",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ReentrantCallback",
    "type": "error",
    "inputs": [
      {
        "name": "callbackInt",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "name": "ReentrantPayer",
    "type": "error",
    "inputs": [
      {
        "name": "oldPayer",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "name": "SignatureExpired",
    "type": "error",
    "inputs": [
      {
        "name": "deadline",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "name": "TooMuchSlippage",
    "type": "error",
    "inputs": [
      {
        "name": "token",
        "type": "address",
        "internalType": "contract IERC20"
      },
      {
        "name": "expected",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "actual",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "name": "UnknownForkId",
    "type": "error",
    "inputs": [
      {
        "name": "forkId",
        "type": "uint8",
        "internalType": "uint8"
      }
    ]
  },
  {
    "name": "ZeroSellAmount",
    "type": "error",
    "inputs": [
      {
        "name": "token",
        "type": "address",
        "internalType": "contract IERC20"
      }
    ]
  },
  {
    "name": "GitCommit",
    "type": "event",
    "inputs": [
      {
        "name": "",
        "type": "bytes20",
        "indexed": true,
        "internalType": "bytes20"
      }
    ],
    "anonymous": false
  },
  {
    "type": "fallback",
    "stateMutability": "nonpayable"
  },
  {
    "name": "balanceOf",
    "type": "function",
    "inputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "pure"
  },
  {
    "name": "execute",
    "type": "function",
    "inputs": [
      {
        "name": "slippage",
        "type": "tuple",
        "components": [
          {
            "name": "recipient",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "buyToken",
            "type": "address",
            "internalType": "contract IERC20"
          },
          {
            "name": "minAmountOut",
            "type": "uint256",
            "internalType": "uint256"
          }
        ],
        "internalType": "struct SettlerBase.AllowedSlippage"
      },
      {
        "name": "actions",
        "type": "bytes[]",
        "internalType": "bytes[]"
      },
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "payable"
  },
  {
    "name": "msgSender",
    "type": "function",
    "inputs": [],
    "outputs": [
      {
        "name": "result",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi;