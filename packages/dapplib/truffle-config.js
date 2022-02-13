require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enroll other venture stool rice rural horn gesture fashion equal ghost'; 
let testAccounts = [
"0x92379f32135aa71f4e36719f0f35093e99e10b0894143e9f8205fe7950795e15",
"0x12a0cb71df1838485c4490f958a4b4d3c2c80b4f1f2e9647bdea38c4ff23c448",
"0xbaead5bf368a5e3155a9829846bae8d82d002c63e3df4f07f41d211b2336a322",
"0x8e1f5f3662e26801f22495c3f47167b26863fb8aab8ea4bd26657051de9a0f98",
"0x46744b150e5fcaa9041102cad76393fc4bd9c03a9574c9503a873f00dfadeba7",
"0xdbd0930aff6067fab09588168ab8ea13087faa582c6d36babcbb2094cfca940f",
"0x04b745ba2131b76b5f750cd4f3ed373a741bed1306ea4e2d340bc2e95c01479f",
"0x0c6f1cbd21a326546e869e8adce9bf4bf5668ffcdb1f8b6e362cdb18284a44d7",
"0x03912df28a4b9491962bfd9d479f26825301fe9b766dc4ad5be0f258cfc83e63",
"0x650a4344b71948c589c350ecfb4afcd9fb41493e87688da80306feebe8797ec9"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

