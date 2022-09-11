import axios from 'axios';



// Replace with your Alchemy API key:
const apiKey = "OagnBhZx0QtLgPeRm7gDhjjPDshwGKXp";

const baseURL = `https://eth-mainnet.g.alchemy.com/v2/${apiKey}`;

// Replace with the wallet address you want to query:
const ownerAddr = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";

// Replace with the token contract address you want to query:
const tokenAddr = "0xdAC17F958D2ee523a2206206994597C13D831ec7";

var data = JSON.stringify({
  "jsonrpc": "2.0",
  "method": "alchemy_getTokenBalances",
  "params": [
    `${ownerAddr}`,
    [
      `${tokenAddr}`
    ]
  ],
  "id": 42
});

var config = {
  method: 'post',
  url: baseURL,
  headers: {
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  //This line converts the tokenBalance values from hex to decimal
  response.data["result"]["tokenBalances"][0]["tokenBalance"] = parseInt(response.data["result"]["tokenBalances"][0]["tokenBalance"], 16);
  console.log("Token balance for address\n", JSON.stringify(response.data.result, null, 2))
})
.catch(function (error) {
  console.log(error);
});