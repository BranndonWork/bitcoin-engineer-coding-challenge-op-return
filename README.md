# Engineering Coding Challenge - Backend for Branndon Coelho

## Instructions

The purpose of this project is to store and index Bitcoin OP_RETURN data for all  
transactions after a certain block. This data will then be served on an HTTP endpoint as  
a JSON payload.

**To start, the app should have one endpoint:**  
/opreturn/${opReturnData}  
It should then return the associated transaction hashes and block hashes for all   
matching transactions​. You can use https://mempool.space/ to check your work.  

**Rules**  
A) Implement in Javascript using Node.js  
B) You can use ANY 3rd-party npm library  
C) You must use Postgres as the database  
D) You can use the Bitcoin mainnet or testnet  
E) You must use bitcoind  

When setting up bitcoind only index the last 10gb of blocks (prune=10000). That should  
be somewhere around a month of the latest blocks.  

Make sure your code also syncs and indexes new blocks as they get mined.  

**You can take as example this BTC tx:**  
8bae12b5f4c088d940733dcd1455efc6a3a69cf9340e17a981286d3778615684  
It has a OP_RETURN with hex 636861726c6579206c6f766573206865696469 that decoded leads to  
this plain text "charley loves heidi".
