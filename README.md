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


/send

<img width="2926" height="349" alt="image" src="https://github.com/user-attachments/assets/9fd9101b-3bb8-46f5-97b8-52d387ecb5e6" />

/token-balance/:address/:tokenAddress

<img width="2068" height="349" alt="image" src="https://github.com/user-attachments/assets/e81c7a8a-8b84-4835-9e40-0c4733b10c8a" />
