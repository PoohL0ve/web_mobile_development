# Ethereum Bootcamp
Notes taken from Alchemy University's Ethereum Bootcamp [course](https://university.alchemy.com/overview/ethereum).

- [Blockchain](#blockchain-cryptography)
- [Blockchain Storage](#blockchain-storage)
- [Ethereum](#ethereum)
- [Smart Contract](#smart-contract-basics)
- [Intro to Solidity](#solidity)
- [Core Solidity](#solidity-core)
- [Solidity Governance](#solidity-governance)

## Blockchain Cryptography
### 🙈 Blockchain and Crytographic Hashes
A **blockchain** provides a secure, transparent and decentralised way to secure information across a network. This mechanism solves the issue around **trust**, by becoming a neutral system.
- **Decentralisation**: No entity or person controls the blockchain, as it is managed by a network of computers.
- **Security**: All transactions are encrypted and verified by several computers.
- **Transparency**: Transactions are available to everyone on the network
- **Immutability**: A transaction cannot be changed or deleted.

A **smart contract** is a self-executing computer program (code) that automatically enforces the terms of an agreement, removing the need for intermediaries. That is, the code would always run as intended.

A **hash function** returns a fixed sized output for input of any size. *Cryptographic Functions* must be:
- **Deterministic**: a specific input always maps to the same output.
- **Pseudorandom**: the output should not be determined based on similar inputs.
- **One-way**: an input cannot be determined by an output.
- **Fast to Compute**: quick calculation.
- **Collision-resistant**: minimal chances of a collision. Two different inputs, cannot provide the same output.

### ✍🏽 Digital Signatures
**Symmetric Key Cryptography** is when the same key is available to both sides of a communication, so that a message can be encrypted and decrypted.

**Asymmetric Key Cryptography** or *Public Key Cryptography* uses a pair of keys to encrypt and decrypt messages:
- **Public Key**: a key that is shared publicly for anyone to use to encrypt a message.
- **Private Key**: a secret key that is used to decrypt messages encrypted by the public key.

Authentication of public keys ensures that if someone signs a message with a private key, the corresponding public key can verify that the particular private key did sign it. The process in Web3:
- User signs a transaction with their private key.
- User broadcasts the transaction to the blockchain
- Blockchain nodes uses the user's address to discover the public key

Elliptic Curve Digital Algorithm is the cryptographic algorithm that Bitcoin uses. Another popular algorithm is the Rivest–Shamir–Adleman (RSA). The **Diffie Hellman Key Exchange** uses a hybrid approach where asymetric cryptography is used for the handshake and symmetric cryptography is used for the message.

### 🧾 Proof of Work and Mining
**Consensus Mechanisms** is a set of rules that a distributed decentralised blochain network follows in order to stay in agreement. Blockchain consensus typically means at least 51% of nodes are in agreement over the current global state of the network. The main consensus rules for proof of work:
- **You cannot double spend**
- **The "longest" chain will be the one the rest of the nodes accept as the one "true" chain, determined by a chain's cumulative work. Also known as *Nakamoto Consensus*.**

Bitcoin uses a consensus mechanism called proof of work, while Ethereum uses proof-of-state. Mining is process of creating a block of transactions to be added to a blockchain. But how does that tie in to proof-of-work? Well, proof-of-work could just as well be called proof-of-mining! Peers in the mining process are called **miners**. Mining is just an automated software that humans run. Functions of mining:
1. Enforces consensus rules
2. Currency issuance

PoW Mining Algorithm:
1. Take current block's block header
2. Append a nonce, starting at nonce = 0
3. Hash data from steps 1 and 2
4. Check hash vs target based on protocol
5. If hash < target, problem solved, receive reward
6. Else restart from step 2 and increment nonce

Mining makes a network more secured.
```js
function mine() {
    // TODO: mine a block
    const block = {
        id: blocks.length
    }

    const transactions = [];
    
    while (transactions.length < MAX_TRANSACTIONS && mempool.length > 0) {
        transactions.push(mempool.pop());
    }
    block.transactions = transactions;

    block.nonce = 0;
    
    let hash;
    while (true) {
        hash = SHA256(JSON.stringify(block)).toString();
        if (BigInt(`0x${hash}`) < TARGET_DIFFICULTY) {
            break;
        }
        block.nonce++;
    }
    
    block.hash = hash;
    blocks.push(block);
}
```
### 🔗 Blockchain Network



## Blockchain Storage
## Ethereum
## Smart Contract Basics
## Solidity
## Solidity Core
## Solidity Governance