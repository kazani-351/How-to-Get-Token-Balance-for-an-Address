// Setup: npm install alchemy-sdk
import { Alchemy, Network } from "alchemy-sdk";


const config = {
  apiKey: "OagnBhZx0QtLgPeRm7gDhjjPDshwGKXp",
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);

//Feel free to switch this wallet address with another address
const ownerAddress = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";

//The below token contract address corresponds to USDT
const tokenContractAddresses = ["0xdAC17F958D2ee523a2206206994597C13D831ec7"];

const data = await alchemy.core.getTokenBalances(
  ownerAddress,
  tokenContractAddresses
);

console.log("Token balance for Address");
console.log(data);