"use strict";
exports.__esModule = true;
console.log('Running script');
var web3 = require("@solana/web3.js");
var sdk = require("@hxronetwork/parimutuelsdk");
var config = sdk.DEV_CONFIG;
var rpc = web3.clusterApiUrl('devnet');
var connection = new web3.Connection(rpc, 'confirmed');
var parimutuelWeb3 = new sdk.ParimutuelWeb3(config, connection);
