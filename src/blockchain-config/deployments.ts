/**
 * This file is auto-generated, DO NOT EDIT
 */

import { CONTRACT_ABIS } from "./contracts/contractAbis";
import { CONTRACT_SOURCE_METADATAS } from "./contracts/contractSourceMetadatas";
import { DeployedContract } from "./types";
export const deployments = {
    1: {},
    10: {},
    56: {},
    130: {},
    137: {},
    360: {},
    999: {},
    5000: {},
    8453: {
        "0xa75c4d3e483a2945fdb8ebd48f27211fe7dfc50d": {
            "abi": CONTRACT_ABIS["0x2b9f379c670b1dd998083e5c34899820108df84925d91c0ce680156658eec170"],
            "sourceCodeMetadata": CONTRACT_SOURCE_METADATAS["0x2b9f379c670b1dd998083e5c34899820108df84925d91c0ce680156658eec170"],
            "type": "system",
            "chainId": 8453,
            "address": "0xa75c4d3e483a2945fdb8ebd48f27211fe7dfc50d",
            "implBytecodeHash": "0x2b9f379c670b1dd998083e5c34899820108df84925d91c0ce680156658eec170",
            "contractName": "VieSFTMintManagerV1",
            "protocol": "Vie",
            "metadata": {}
        },
        "0x9d734c03953b6f700d9008d6a78e873f5b3c9340": {
            "abi": CONTRACT_ABIS["0x36f14e5ed6357f02a211ca00e217f39e9ed9d9a295213af56759c8c372bc8154"],
            "sourceCodeMetadata": CONTRACT_SOURCE_METADATAS["0x36f14e5ed6357f02a211ca00e217f39e9ed9d9a295213af56759c8c372bc8154"],
            "type": "system",
            "chainId": 8453,
            "address": "0x9d734c03953b6f700d9008d6a78e873f5b3c9340",
            "implBytecodeHash": "0x36f14e5ed6357f02a211ca00e217f39e9ed9d9a295213af56759c8c372bc8154",
            "contractName": "VieTokenSwapManager",
            "protocol": "Vie",
            "metadata": {}
        },
        "0x6fd07d4b5fd7093762fb2f278769aa7e2511d45c": {
            "abi": CONTRACT_ABIS["0xdc259d902ca2060b170193ac8c13011c3d905257c1f1d00ea0053e7fbf4d2693"],
            "sourceCodeMetadata": CONTRACT_SOURCE_METADATAS["0xdc259d902ca2060b170193ac8c13011c3d905257c1f1d00ea0053e7fbf4d2693"],
            "type": "system",
            "chainId": 8453,
            "address": "0x6fd07d4b5fd7093762fb2f278769aa7e2511d45c",
            "implBytecodeHash": "0xdc259d902ca2060b170193ac8c13011c3d905257c1f1d00ea0053e7fbf4d2693",
            "contractName": "VieRegistryV1",
            "protocol": "Vie",
            "metadata": {}
        },
        "0xd39911820f34817342ace23bb2f11e3bc8ba82ef": {
            "abi": CONTRACT_ABIS["0xf342055e9118e560d673c4629c912225f3315ed78d1b5909fce5fafa14cad662"],
            "sourceCodeMetadata": CONTRACT_SOURCE_METADATAS["0xf342055e9118e560d673c4629c912225f3315ed78d1b5909fce5fafa14cad662"],
            "type": "system",
            "chainId": 8453,
            "address": "0xd39911820f34817342ace23bb2f11e3bc8ba82ef",
            "implBytecodeHash": "0xf342055e9118e560d673c4629c912225f3315ed78d1b5909fce5fafa14cad662",
            "contractName": "VieVault",
            "protocol": "Vie",
            "metadata": {}
        },
        "0xae58570e322fe386fcdc1f408575639ec100b3ae": {
            "abi": CONTRACT_ABIS["0xc27b84c680f54e2239d73c734ed9595e838f4a1f2c9695ac07917bc2c42f732e"],
            "sourceCodeMetadata": CONTRACT_SOURCE_METADATAS["0xc27b84c680f54e2239d73c734ed9595e838f4a1f2c9695ac07917bc2c42f732e"],
            "type": "system",
            "chainId": 8453,
            "address": "0xae58570e322fe386fcdc1f408575639ec100b3ae",
            "implBytecodeHash": "0xc27b84c680f54e2239d73c734ed9595e838f4a1f2c9695ac07917bc2c42f732e",
            "contractName": "VieFactory",
            "protocol": "Vie",
            "metadata": {}
        },
        "0x0ac9591c190692fdcfa1baf00c4d89ee1b5050d6": {
            "abi": CONTRACT_ABIS["0x9006517125d02bffed79aea4bec56adf55911afebc2e9c7527a3358d1cdc331c"],
            "sourceCodeMetadata": CONTRACT_SOURCE_METADATAS["0x9006517125d02bffed79aea4bec56adf55911afebc2e9c7527a3358d1cdc331c"],
            "type": "system",
            "chainId": 8453,
            "address": "0x0ac9591c190692fdcfa1baf00c4d89ee1b5050d6",
            "implBytecodeHash": "0x9006517125d02bffed79aea4bec56adf55911afebc2e9c7527a3358d1cdc331c",
            "contractName": "ViePredictionMarketUSDCV1",
            "protocol": "Vie",
            "context": "Use to buy and sell shares of an outcome token of a prediction market. Also use to redeem shares for USDC once a market is resolved. And, for resolvers to resolve markets.",
            "metadata": {
                "marketIds": "A marketId is just the address of a VieMarketInventory contract that is deployed. Each one represents a market, where each one is an ERC-1155 contract with it's outcome tokens.",
                "decimalsContext": "The decimals of each outcome token is 6, and the decimals of the USDC collateral token is 6.",
                "buyOutcomeTokenSharesContext": "To buy shares of an outcome token, use the function buyWithPermitSignature(address marketId, uint256 outcomeId, uint256 sharesToBuy, uint256 maxCost, PermitSignaturePayload memory sig) external function. Make sure to quote the expected USDC cost by using the useReadContract hook with the function quoteBuy(address marketId, uint256 outcomeId, uint256 sharesToBuy). Once the user approves a quote, first construct a valid Permit signature with the usePermitSignature hook, have the user sign it with their wallet via the signPermit function, and then pass the Permit signature along with the rest of the parameters when actually executing the transaction. When constructing the Permit signature, use a cost value equal to the quoted cost plus 5% of it (so 5% slippage). Make sure to immediately trigger the useWriteContractLifecycle transaction after the permit signature is constructed.",
                "sellOutcomeTokenSharesContext": "To sell shares of an outcome token, use the function sell(address marketId, uint256 outcomeId, uint256 sharesToSell) external function. Make sure to quote the expected USDC payout by using the useReadContract hook with the function quoteSell(address marketId, uint256 outcomeId, uint256 sharesToSell). Once the user approves a quote, check if the user has approved the contract to spend their ERC-1155 outcome tokens. If not, set up a transaction to approve this ViePredictionMarketUSDCV1 contract to spend the outcome tokens via the function setApprovalForAll(address operator, bool approved) external. Then, set up a transaction to sell the shares of the outcome token via the sell function, where the minPayout argument is the quoted payout minus 5% of it (so 5% slippage).",
                "redeemOutcomeTokenSharesContext": "Redeeming should be made available for the user to redeem their shares for USDC once a market is resolved and they have shares in the outcome that won. This should be done by using the function redeem(address marketId, uint256 outcomeId, uint256 shares) external function. Id, uint256 outcomeId, uint256 shares). The user will receive one USDC token per share redeemed.",
                "resolveMarketContext": "To resolve a market, use the function resolve(address marketId, uint256 winningOutcomeId) external function. The winningOutcomeId is the outcome that won the market (the tokenId of the winning outcome on the VieMarketInventory contract). This capability should only be shown in the UI if the connected wallet is the resolver address.",
                "signatureContext": "When using the permit signature, ALWAYS re-use the deadline that's been encoded into the signature, NEVER re-instantiate a new deadline value to pass into the contract (it HAS to be the deadline encoded into the signature).",
                "priceHistoryContext": "To get the price history of an outcome token, use the useQueryEvents hook to query the OutcomeTraded event and it's history. Each emission of this event has the price of a given outcome token at that point in time.",
                "uiContext": "When building a UI for a prediction market, ALMOST ALWAYS show each outcome's share price (in USDC).",
                "getMarketStateContext": "The two functions that should be used to get the current state of a market are getMarket(address marketId) external view for all of the market's current state, and getUserBalances(address marketId, address user) external view to get the user's outcome token share balances.",
                "quoteBuyAndSellContext": "Use quoteBuy(address marketId, uint256 outcomeId, uint256 sharesToBuy) and quoteSell(address user, address marketId, uint256 outcomeId, uint256 sharesToSell) to get the expected USDC cost or payout for buying or selling shares of an outcome token. Always show the quoted value in the UI, for example under the buy or sell button as 'Expected cost: $X.XX' or 'Expected payout: $X.XX'. Finally, these read functions may revert for whatever reason (for eg. if the user doesn't have sufficient USDC when calling quoteSell) - make sure to handle this gracefully in the UI.",
                "priceHistoryOrChartContext": "To show the price history of an outcome token, use the useQueryEvents hook to query the OutcomeTraded event and it's history. Each emission of this event has the price of a given outcome token at that point in time.",
                "outcomeIdsContext": "The outcomeIds are 1-indexed. This is important!",
                "usdcAddress": "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913"
            }
        },
        "0x4200000000000000000000000000000000000006": {
            "abi": CONTRACT_ABIS["0x9a33d980a4472e3f8973f7057256bbacb9c48a05eb162f23e00575e92c5c610f"],
            "sourceCodeMetadata": CONTRACT_SOURCE_METADATAS["0x9a33d980a4472e3f8973f7057256bbacb9c48a05eb162f23e00575e92c5c610f"],
            "type": "imported",
            "chainId": 8453,
            "address": "0x4200000000000000000000000000000000000006",
            "implBytecodeHash": "0x9a33d980a4472e3f8973f7057256bbacb9c48a05eb162f23e00575e92c5c610f",
            "contractName": "WETH9",
            "metadata": {}
        },
        "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913": {
            "abi": CONTRACT_ABIS["0x5b3a3c766836ed191bf9ef302fc88cc1422e9c5e0295f94463ba7a59b2806d52"],
            "sourceCodeMetadata": CONTRACT_SOURCE_METADATAS["0x5b3a3c766836ed191bf9ef302fc88cc1422e9c5e0295f94463ba7a59b2806d52"],
            "type": "imported",
            "chainId": 8453,
            "address": "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
            "implBytecodeHash": "0x5b3a3c766836ed191bf9ef302fc88cc1422e9c5e0295f94463ba7a59b2806d52",
            "contractName": "USDC",
            "metadata": {},
            "originalVerifiedSource": "Sourcify"
        },
        "0x5c9bdc801a600c006c388fc032dcb27355154cc9": {
            "abi": CONTRACT_ABIS["0x5d7a047cabfd463d24d78aac0a4f9f685667daa828cd645d451e2d91e1f6a7cd"],
            "sourceCodeMetadata": CONTRACT_SOURCE_METADATAS["0x5d7a047cabfd463d24d78aac0a4f9f685667daa828cd645d451e2d91e1f6a7cd"],
            "type": "imported",
            "chainId": 8453,
            "address": "0x5c9bdc801a600c006c388fc032dcb27355154cc9",
            "implBytecodeHash": "0x5d7a047cabfd463d24d78aac0a4f9f685667daa828cd645d451e2d91e1f6a7cd",
            "contractName": "BaseSettler",
            "context": "Use to route swaps between ERC20s, when dealing with tokens that aren't Vie tokens",
            "metadata": {}
        },
        "0x498581ff718922c3f8e6a244956af099b2652b2b": {
            "abi": CONTRACT_ABIS["0x132889a41b89b4e124ae357ad9f5c5398fb0465e2a27b25b6ecfc8a9a18c6ff0"],
            "sourceCodeMetadata": CONTRACT_SOURCE_METADATAS["0x132889a41b89b4e124ae357ad9f5c5398fb0465e2a27b25b6ecfc8a9a18c6ff0"],
            "type": "imported",
            "chainId": 8453,
            "address": "0x498581ff718922c3f8e6a244956af099b2652b2b",
            "implBytecodeHash": "0x132889a41b89b4e124ae357ad9f5c5398fb0465e2a27b25b6ecfc8a9a18c6ff0",
            "contractName": "PoolManager",
            "context": "Uniswap v4 pool manager holding all pools",
            "metadata": {},
            "protocol": "UniswapV4"
        },
        "0x03a520b32c04bf3beef7beb72e919cf822ed34f1": {
            "abi": CONTRACT_ABIS["0x5dfc8de992cfcc9bcd9dfc71f29d3f98d037ffd46ebf0e6cd0748e4c848fddeb"],
            "sourceCodeMetadata": CONTRACT_SOURCE_METADATAS["0x5dfc8de992cfcc9bcd9dfc71f29d3f98d037ffd46ebf0e6cd0748e4c848fddeb"],
            "type": "imported",
            "chainId": 8453,
            "address": "0x03a520b32c04bf3beef7beb72e919cf822ed34f1",
            "implBytecodeHash": "0x5dfc8de992cfcc9bcd9dfc71f29d3f98d037ffd46ebf0e6cd0748e4c848fddeb",
            "contractName": "NonfungiblePositionManager",
            "metadata": {},
            "originalVerifiedSource": "Etherscan",
            "selected": true
        }
    },
    42161: {},
    43114: {},
    59144: {},
    80094: {},
    84532: {
        "0xac1a16058f711c3e86b7d47c57fc2a3d75ed4b56": {
            "abi": CONTRACT_ABIS["0x2b9f379c670b1dd998083e5c34899820108df84925d91c0ce680156658eec170"],
            "sourceCodeMetadata": CONTRACT_SOURCE_METADATAS["0x2b9f379c670b1dd998083e5c34899820108df84925d91c0ce680156658eec170"],
            "type": "system",
            "chainId": 84532,
            "address": "0xac1a16058f711c3e86b7d47c57fc2a3d75ed4b56",
            "implBytecodeHash": "0x2b9f379c670b1dd998083e5c34899820108df84925d91c0ce680156658eec170",
            "contractName": "VieSFTMintManagerV1",
            "protocol": "Vie",
            "metadata": {}
        },
        "0x30cfd978746137ea77b091c40850e7497c9a1bf8": {
            "abi": CONTRACT_ABIS["0x36f14e5ed6357f02a211ca00e217f39e9ed9d9a295213af56759c8c372bc8154"],
            "sourceCodeMetadata": CONTRACT_SOURCE_METADATAS["0x36f14e5ed6357f02a211ca00e217f39e9ed9d9a295213af56759c8c372bc8154"],
            "type": "system",
            "chainId": 84532,
            "address": "0x30cfd978746137ea77b091c40850e7497c9a1bf8",
            "implBytecodeHash": "0x36f14e5ed6357f02a211ca00e217f39e9ed9d9a295213af56759c8c372bc8154",
            "contractName": "VieTokenSwapManager",
            "protocol": "Vie",
            "metadata": {}
        },
        "0x5f430b43a69732a341c39fd7ba32ca9caf38a76e": {
            "abi": CONTRACT_ABIS["0xdc259d902ca2060b170193ac8c13011c3d905257c1f1d00ea0053e7fbf4d2693"],
            "sourceCodeMetadata": CONTRACT_SOURCE_METADATAS["0xdc259d902ca2060b170193ac8c13011c3d905257c1f1d00ea0053e7fbf4d2693"],
            "type": "system",
            "chainId": 84532,
            "address": "0x5f430b43a69732a341c39fd7ba32ca9caf38a76e",
            "implBytecodeHash": "0xdc259d902ca2060b170193ac8c13011c3d905257c1f1d00ea0053e7fbf4d2693",
            "contractName": "VieRegistryV1",
            "protocol": "Vie",
            "metadata": {}
        },
        "0x8d4231a9ba626adaa03859754d384963ee32d12b": {
            "abi": CONTRACT_ABIS["0xf342055e9118e560d673c4629c912225f3315ed78d1b5909fce5fafa14cad662"],
            "sourceCodeMetadata": CONTRACT_SOURCE_METADATAS["0xf342055e9118e560d673c4629c912225f3315ed78d1b5909fce5fafa14cad662"],
            "type": "system",
            "chainId": 84532,
            "address": "0x8d4231a9ba626adaa03859754d384963ee32d12b",
            "implBytecodeHash": "0xf342055e9118e560d673c4629c912225f3315ed78d1b5909fce5fafa14cad662",
            "contractName": "VieVault",
            "protocol": "Vie",
            "metadata": {}
        },
        "0x5429d0330684d805964012538021be18ef470d20": {
            "abi": CONTRACT_ABIS["0xc27b84c680f54e2239d73c734ed9595e838f4a1f2c9695ac07917bc2c42f732e"],
            "sourceCodeMetadata": CONTRACT_SOURCE_METADATAS["0xc27b84c680f54e2239d73c734ed9595e838f4a1f2c9695ac07917bc2c42f732e"],
            "type": "system",
            "chainId": 84532,
            "address": "0x5429d0330684d805964012538021be18ef470d20",
            "implBytecodeHash": "0xc27b84c680f54e2239d73c734ed9595e838f4a1f2c9695ac07917bc2c42f732e",
            "contractName": "VieFactory",
            "protocol": "Vie",
            "metadata": {}
        },
        "0xb76f1ad00b731447d4465aa890c24b66df586728": {
            "abi": CONTRACT_ABIS["0x9006517125d02bffed79aea4bec56adf55911afebc2e9c7527a3358d1cdc331c"],
            "sourceCodeMetadata": CONTRACT_SOURCE_METADATAS["0x9006517125d02bffed79aea4bec56adf55911afebc2e9c7527a3358d1cdc331c"],
            "type": "system",
            "chainId": 84532,
            "address": "0xb76f1ad00b731447d4465aa890c24b66df586728",
            "implBytecodeHash": "0x9006517125d02bffed79aea4bec56adf55911afebc2e9c7527a3358d1cdc331c",
            "contractName": "ViePredictionMarketUSDCV1",
            "protocol": "Vie",
            "context": "Use to buy and sell shares of an outcome token of a prediction market. Also use to redeem shares for USDC once a market is resolved. And, for resolvers to resolve markets.",
            "metadata": {
                "marketIds": "A marketId is just the address of a VieMarketInventory contract that is deployed. Each one represents a market, where each one is an ERC-1155 contract with it's outcome tokens.",
                "decimalsContext": "The decimals of each outcome token is 6, and the decimals of the USDC collateral token is 6.",
                "buyOutcomeTokenSharesContext": "To buy shares of an outcome token, use the function buyWithPermitSignature(address marketId, uint256 outcomeId, uint256 sharesToBuy, uint256 maxCost, PermitSignaturePayload memory sig) external function. Make sure to quote the expected USDC cost by using the useReadContract hook with the function quoteBuy(address marketId, uint256 outcomeId, uint256 sharesToBuy). Once the user approves a quote, first construct a valid Permit signature with the usePermitSignature hook, have the user sign it with their wallet via the signPermit function, and then pass the Permit signature along with the rest of the parameters when actually executing the transaction. When constructing the Permit signature, use a cost value equal to the quoted cost plus 5% of it (so 5% slippage). Make sure to immediately trigger the useWriteContractLifecycle transaction after the permit signature is constructed.",
                "sellOutcomeTokenSharesContext": "To sell shares of an outcome token, use the function sell(address marketId, uint256 outcomeId, uint256 sharesToSell) external function. Make sure to quote the expected USDC payout by using the useReadContract hook with the function quoteSell(address marketId, uint256 outcomeId, uint256 sharesToSell). Once the user approves a quote, check if the user has approved the contract to spend their ERC-1155 outcome tokens. If not, set up a transaction to approve this ViePredictionMarketUSDCV1 contract to spend the outcome tokens via the function setApprovalForAll(address operator, bool approved) external. Then, set up a transaction to sell the shares of the outcome token via the sell function, where the minPayout argument is the quoted payout minus 5% of it (so 5% slippage).",
                "redeemOutcomeTokenSharesContext": "Redeeming should be made available for the user to redeem their shares for USDC once a market is resolved and they have shares in the outcome that won. This should be done by using the function redeem(address marketId, uint256 outcomeId, uint256 shares) external function. Id, uint256 outcomeId, uint256 shares). The user will receive one USDC token per share redeemed.",
                "resolveMarketContext": "To resolve a market, use the function resolve(address marketId, uint256 winningOutcomeId) external function. The winningOutcomeId is the outcome that won the market (the tokenId of the winning outcome on the VieMarketInventory contract). This capability should only be shown in the UI if the connected wallet is the resolver address.",
                "signatureContext": "When using the permit signature, ALWAYS re-use the deadline that's been encoded into the signature, NEVER re-instantiate a new deadline value to pass into the contract (it HAS to be the deadline encoded into the signature).",
                "priceHistoryContext": "To get the price history of an outcome token, use the useQueryEvents hook to query the OutcomeTraded event and it's history. Each emission of this event has the price of a given outcome token at that point in time.",
                "uiContext": "When building a UI for a prediction market, ALMOST ALWAYS show each outcome's share price (in USDC).",
                "getMarketStateContext": "The two functions that should be used to get the current state of a market are getMarket(address marketId) external view for all of the market's current state, and getUserBalances(address marketId, address user) external view to get the user's outcome token share balances.",
                "quoteBuyAndSellContext": "Use quoteBuy(address marketId, uint256 outcomeId, uint256 sharesToBuy) and quoteSell(address user, address marketId, uint256 outcomeId, uint256 sharesToSell) to get the expected USDC cost or payout for buying or selling shares of an outcome token. Always show the quoted value in the UI, for example under the buy or sell button as 'Expected cost: $X.XX' or 'Expected payout: $X.XX'. Finally, these read functions may revert for whatever reason (for eg. if the user doesn't have sufficient USDC when calling quoteSell) - make sure to handle this gracefully in the UI.",
                "priceHistoryOrChartContext": "To show the price history of an outcome token, use the useQueryEvents hook to query the OutcomeTraded event and it's history. Each emission of this event has the price of a given outcome token at that point in time.",
                "outcomeIdsContext": "The outcomeIds are 1-indexed. This is important!",
                "usdcAddress": "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913"
            }
        },
        "0x4200000000000000000000000000000000000006": {
            "abi": CONTRACT_ABIS["0xd968e603d6697876085a8fd8e0667ecab51848ed823fcff4816e8b64f7768454"],
            "sourceCodeMetadata": CONTRACT_SOURCE_METADATAS["0xd968e603d6697876085a8fd8e0667ecab51848ed823fcff4816e8b64f7768454"],
            "type": "imported",
            "chainId": 84532,
            "address": "0x4200000000000000000000000000000000000006",
            "implBytecodeHash": "0xd968e603d6697876085a8fd8e0667ecab51848ed823fcff4816e8b64f7768454",
            "contractName": "WETH9",
            "metadata": {}
        },
        "0x036cbd53842c5426634e7929541ec2318f3dcf7e": {
            "abi": CONTRACT_ABIS["0x8e01f4a500e92096e4ffbec2ce485fea179988b38b3c773a0ce458cab58cc6a6"],
            "sourceCodeMetadata": CONTRACT_SOURCE_METADATAS["0x8e01f4a500e92096e4ffbec2ce485fea179988b38b3c773a0ce458cab58cc6a6"],
            "type": "imported",
            "chainId": 84532,
            "address": "0x036cbd53842c5426634e7929541ec2318f3dcf7e",
            "implBytecodeHash": "0x8e01f4a500e92096e4ffbec2ce485fea179988b38b3c773a0ce458cab58cc6a6",
            "contractName": "USDC",
            "metadata": {},
            "originalVerifiedSource": "Sourcify"
        }
    },
    534352: {}
} as const satisfies Record<number, Record<string, DeployedContract>>;