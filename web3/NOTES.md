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
- **Collision-resistant**: minimal chances of a collision.

### ✍🏽 Digital Signatures
**Symmetric Key Cryptography** is when the same key is available to both sides of a communication, so that a message can be encrypted and decrypted.

**Asymmetric Key Cryptography** or *Public Key Cryptography* uses a pair of keys to encrypt and decrypt messages:
- **Public Key**: a key that is ahsred public for anyone to use to encrypt a message.
- **Private Key**: a secret key that is used to decrypt messages encrypted by the public key.

Authentication of public keys ensures that if someone signs a message with a private key, the corresponding public key can verify that the particular private key did sign it. The process in Web3:
- User signs a transaction with their private key.
- User broadcasts the transaction to the blockchain
- Blockchain nodes uses the user's address to discover the public key

Elliptic Curve Digital Algorithm is the cryptographic algorithm that Bitcoin uses. Another popular algorithm is the Rivest–Shamir–Adleman (RSA).

### 🧾 Proof of Work: Intro to Blockchain Consensus Mechanisms
### 🔗 Blockchain Network



## Blockchain Storage
## Ethereum
## Smart Contract Basics
## Solidity
## Solidity Core
## Solidity Governance