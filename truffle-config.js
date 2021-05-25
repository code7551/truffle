const HDWalletProvider = require('@truffle/hdwallet-provider');
const provider = new HDWalletProvider({
     privateKeys: [process.env.PRIVATE_KEY],
     providerOrUrl: `https://ropsten.infura.io/v3/${process.env.INFURA_KEY}`
});
module.exports = {
  networks: {
    ropsten: {
      provider: () => provider,
      network_id: '3',
    },
    development: {
     host: "127.0.0.1",
     port: 7545,
     network_id: "*"
    },
    test: {
     host: "127.0.0.1",
     port: 7545,
     network_id: "*"
   }
}
};
