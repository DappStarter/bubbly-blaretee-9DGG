require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give prison obtain suggest name raise ranch comic grace permit flock general'; 
let testAccounts = [
"0x34ff6e3d2c84cb641ac6f453b66256d9c75dc7a6d6fdba9bd42b35b5ef4a03a2",
"0xe42a936526d16466d6b4d5a57310f3f940ca9d740b42160b1fa7f7064ddf354f",
"0x6e43db174721716c418f0241fad34bef5bb8865c19a8d343cda8ab136cd47787",
"0xe3c569274b0ce196ae1b4fa776970e2705ca8b1fe7145125515e246c9c5c7fad",
"0x5d15d961ff2cbbf398a40544c2e7bfc3db608a7eefa4cb03cf7d178c64c46c34",
"0xa9d09ee5f46aa973b3bd5398daa0841e3d96f8c45085d6ed09d701c3670a508f",
"0x8fa12cef977d76a945520f32185cdff039fac52ff712db6a638c8d8118536f02",
"0x341a878ce12014afb328495bd5fbd7a479dca17521ac79490b33b46b90e81b81",
"0x192c16d068147a364127558d5c00e69f1d2356f3994befc32ea06fd492c7b277",
"0xedcc01e0d0178ba9cbac9a68601258153bb0eef7e76d80aa7123bd3d6db600c3"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


