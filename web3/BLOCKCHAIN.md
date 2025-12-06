# All About Blockchain
Journey to Web3 Development
- [Intro](#introduction)
- [Transactions](#-sending-transactions)
- [Architecture](#️-blockchain-architecture)
- [Use Cases](#-use-cases)
- [Scalability](#-scalability)

## Introduction
A blockchain is a shared ledger, a shared record of all transansactions which are grouped together in blocks and each block is mathematically linked to the previous through crytography. They are maintained and controlled by a decentralised network made up of nodes. The difference between `ethereum` and `bitcoin` is that ethereum also has a complete smart contract which is an argreement. A **smart contract** is a self-executing computer program (code) that automatically enforces the terms of an agreement, removing the need for intermediaries. That is, the code would always run as intended. The benefits of blockchain include:
- `Permissionless`: You don't need any centralised intermediary like banks determining what you can do.
- `Credibly Neutral`: It does not care who you are. Everyone is treated the same.
- `Decentralised`: No single point of control and failure
- `Immutable and Transparent`: The rules cannot change and everyone knows the terms

Blockchain has many use cases and capabilities:
1. `Digital Money and Decentralised Finance`: Blockchain allows crytocurrencies or digital money to be shared between individuals without intermediaries like banks, such as __Bitcoin__ and __Ether__. The world of blockchain finance is `Decentralised Finance (DeFi)`, which created the `stablecoin`. Stablecoins are currencies designed to maintain the stable value of a currency such as __USDC__ which will always be equal to 1 USD, which are good for people that are experiencing hyperinflation.
2. `Decentralised Agreements with Smart Contracts`: Blockchain use smart contracts to create deterministic, tamper-proof agreements, which are written in code. These contracts automatically execute when their predefined conditions are met, making them transparent, immutable, and highly efficient.
3. `Cross-Border Payments`: Blockchain allow anyone to send money to anyone across the world using tools like __Klever__.
4. `Verifiable Ownership`: Ownership of both digital and physical assets can be proven by representing them as unique token (like NFTs) on an immutable ledger, giving verifiability and a certificate of authentication. These assets can include digital art and music, educational certificates, real-world assets, and in-game items.
5. `Democraticsing Access to Financial Service`: Anyone can benefit from banking services.
6. `New Models of Governance with DAOs`: Blockchain enables new forms of community-led decision-making through __Decentralized Autonomous Organizations (DAOs)__. A DAO functions like an internet-native organization or club where members use tokens to vote on proposals that dictate the group's rules and actions. The entire process is transparently recorded on the blockchain and the outcomes are automatically implemented through smart contracts.

Key terminology to understand:
- `DApp`: A __Decentralised Application__ is one where the backend logic runs on a decentralised blockchain network instead of centralised servers owned by a company.
- `Web Evolution`:
    - __Web1__: The initial stage of the web, which had __static__ read-only content
    - __Web2__: The "read-write" internet we use today. It's interactive and social, but our data and content are controlled by the large corporations that own the platforms
    - __Web3__: The next evolution of the internet, built on blockchain technology. It introduces smart contracts and digital ownership, creating an open internet where users have true control over their data and digital assets

There are many types of blockchains beyond Ethereum and Bitcoin like Solana, Polygon, and Optimism. One reason for this is to help with scalability issues. A `Layer 1 (L1)` blockchain is built from the ground-up such as Ethereum. `Layer 2 (L2)` blockchains, like Optimism are built on top of layer 1s to provide efficiency in handling large batches of transactions. They process large batches of transactions "off-chain" at a very low cost, bundle them into a compressed summary, and then submit that summary back to the main Ethereum L1. By doing this, they inherit the security and decentralization of Ethereum while offering significantly faster transaction speeds and dramatically lower fees.

When interacting with any of the blockchains the environments may be:
1. `Mainnet`: A live public blockchain where transactions have real financial consequences.
2. `Testnet`: A parallel testing environment that uses tokens, used to deply and test smart contracts and applications. To get these "fake" tokens for a testnet, you use a __faucet__. A faucet is typically a website where you can request free testnet tokens to be sent to your wallet address. At the time of this writing, Ethereum's primary testnet is called __Sepolia__.

With so many different networks—L1s, L2s, mainnets, and testnets—how do our wallets and applications know which one they're connected to? The answer is the __Chain ID__. A Chain ID is a unique number that serves as a specific identifier for a blockchain network. This simple number prevents you from accidentally trying to spend your valuable Ethereum Mainnet funds on the Sepolia Testnet, or vice-versa. For example:
- Ethereum Mainnet has a Chain ID of 1.
- Sepolia Testnet has a Chain ID of 11155111.

### The Oracle Problem
The `Blockchain Oracle Problem` describes the challenge of getting external data on to the blockchain. That is, smart contracts need data from outside of their operations. Smart contracts can't simply make API calls because they rely on the __deterministic principle__. It states that a specific input must always produce the same output, which allows nodes to process the same transaction globally and arrive at the same state and maintain consensus and security. However, real-world data are non-deterministic where different nodes may receive different data, breaking the consensus mechanism of the block chain.

The solution to this problem is an `oracle`. An oracle is a service that acts as a bridge, fetching external, off-chain data and delivering it to the blockchain for smart contracts to use. Just as blockchains require a decentralized network of nodes to be secure, oracles need a decentralized network to be trustworthy. This is where __Decentralized Oracle Networks (DONs)__ come in. A DON can be queried by:
1. Multiple independent nodes in the network fetch the same piece of data from the real world (e.g., the price of ETH from multiple premium data sources).
2. The nodes cross-check the data with each other.
3. They run a consensus protocol to agree on a single, correct value.
4. This validated, agreed-upon value is then submitted on-chain to the smart contract.

The `Hybrid Smart Contract` is the combination of on-chain code and off-chain data (DON) where the architecture consists of:
1. On-Chain Component: The smart cintract logic that sits on the blockchain
2. Off-Chain Component: The real-world data provided by DON

`Chainlink` is the industry-standard, modular, and decentralized oracle network that provides the critical infrastructure to solve the oracle problem. One of its key strengths is that it is blockchain-agnostic, meaning its services can be integrated with many different blockchains, including Ethereum, Avalanche, Polygon, zkSync, and more. This makes learning Chainlink a highly transferable skill for any Web3 developer.

### The Purpose of Smart Contracts
In simple terms, every contract, transaction, and service is a __promise__. Most agreements rely on a central authority to manage it, like banks, which creates a point of failure called __counterparty risk__: the risk that the other party would default on its own obligation. The solution is to create unbreakable promises with __smart contracts__ where argreements do not rely on trusting people or companies but on code that are written on decentralised blockchains. The three pillars of trustless agremments:
1. `Immutability`: The code of the smart contract cannot be changed once it is deployed on the blockchain.
2. `Decentralization`: The contract is verfified and executed by a global network of independent computers, where no central hub or server is responsible.
3. `Transparency`: The code of the contract is public where anyone can audit to rules to ensure that they are fair to interact with.

This introduces a paradigm shift from paper-guarantee or brand-based trust to math-based trust or cryptographic guarantees. The system can be trusted because of the underlying functionalities of crytography and mathematics which ensures that it is verfiable, deterministic, and operated through a decentralised network. In this model, counterparty risk is low and transparent, and the system's rules are unavoidably built-in. Websites like Uniswap uses __Decentralised Exchanges (DEXs)__ to solve issues that are caused by centralised intermediary parties.

The purpose of smart contracts is to replace breakable, human-based promises with verifiable, math-based guarantees. It's about building systems where the rules are fair, transparent, and enforced automatically, without relying on the good intentions of a central party.

### Introduction to Ethereum Virtual Machine
The EVM is a globally shared sandboxed environment that provides the governing rules for the state of the Ethereum blockchain changes from one block to the next. Its primary function is to execute smart contracts.

When a smart contract is interacted with, the transaction is broadcasted to every node that must process it independently to validate it. The EVM ensure that each node arrives at the same result because it acts as the universal standard for computation. Every node runs a version of the EVM, therefore, they follow the exact same standard for executing the smart contract code. This is the fundamental deterministic execution of decentralised systems. While the EVM is a specification—a set of rules—it is brought to life by client software. Nodes run client software like __GETH (Go Ethereum)__, which contains an EVM implementation that follows the specification to the letter.

The success of EVMs has led to many creation of blockchains like Layer 2s to adopt its design. However, it's important to understand __EVM Equivalence__ and __EVM Compatibility__:
|EVM Equivalence          | EVM Compatibility       |
|:-------------------|:---------------------|
|An EVM Equivalent chain is designed to behave exactly like an Ethereum mainnet, where the underlying mechanics, opcodes, and state-transition logic are the same. <ul> <li>__Implication for Developers__: A smart contract that works on Ethereum can be taken and deployed on an EVM Equivalent, where it will do the exact same thing.</li> <li>__Examples__: Optimism, Arbitrum</li> </ul> | An EVM Compatibibility chain can execute smart contracts written in Ethereum native languages like Solidity, where the architecture of the chains are modified and optimised. <ul> <li>__Implications for Developers__: Developers may need to make changes to their smart contracts or use specialised deployment tools.</li> <li>__Examples__: Polygon zkEVM, zykSync Era</li> </ul> |

### Benefits of Smart Contracts
Blockchain has other benefits besides decentralisation, transparency, and verfiability. It is also __Pseudo-anonymous__. This means that on-chain actions are not directly tied to your real-world identity. Instead of your name, your identity is represented by a long, cryptographic address. While every transaction from that address is public, linking that address to a specific person requires external information. This model provides public verifiability while preserving a crucial degree of personal privacy. For use cases requiring even greater privacy, advanced cryptographic technologies like `Zero-Knowledge Proofs (ZKPs)` are being developed, allowing users to prove something is true without revealing the underlying information.

While an international bank takes several days or weeks to process a transaction, which may further be delayed by holidays, time zones, and weather, smart contracts execute automatically. They operate 24/7 365 days a year without manual intervention and intermediaries. This speed drastically reduces the time and costs of transactions, thus increasing efficiency.

Additionally, the code is immutable meaning it cannot be change. However, for if a smart contract must be upgraded it must originally be coded in a specfic way to allow new versions of it. This immutability makes it hard to attackers to take control as they would nned to attack 51% of the nodes in the network.

Perhaps the most profound benefit of smart contracts is that they create a __trust-minimized__ environment. In traditional systems, we rely on trusting our counterparties, like insurance companies or employers. Smart contracts replace this reliance on trust with the cryptographic certainty of code.

## 💳 Sending Transactions

## 🏛️ Blockchain Architecture

## 💪 Use Cases

## 📈 Scalability


## Resources
- [Cyfrin Updraft](https://updraft.cyfrin.io/courses/blockchain-basics)