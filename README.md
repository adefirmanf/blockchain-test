# Ethereum Blockchain Service

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```

## Endpoints
- `GET /balance/:address` - Returns ETH balance for address
- `POST /send` - Sends ETH transaction (body: `{ fromPrivateKey, toAddress, amount }`)
- `GET /network` - Returns chain ID and network name (bonus)
- `GET /token-balance/:address/:tokenAddress` - Returns ERC-20 token balance (bonus)

## Tech Stack
- Node.js
- Express
- ethers.js

## Notes
- Replace placeholder logic in controllers/routes.
- Use Goerli, Sepolia, or any public Ethereum testnet RPC.
- No frontend required.

/network
<img width="787" height="174" alt="image" src="https://github.com/user-attachments/assets/78605fca-ed45-436a-a70f-daba542bb976" />

/balance/:address
<img width="787" height="174" alt="image" src="https://github.com/user-attachments/assets/f0d4c947-9ceb-479b-a2e0-02ed8672fc19" />

