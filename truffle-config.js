module.exports = {
  networks: {
    // Configuration for your local development network
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard port for Ganache
      network_id: "*",
      gas: 6721975 ,         // Set to Ganache default
      gasPrice: 20000000000 // Set default gas price
         // Match any network id
    },
  },

  // Set default mocha options here, use special reporters, etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.0",    // Fetch exact version from solc-bin (default: truffle's version)
    }
  },

  // Truffle DB is currently disabled by default; to enable it, change enabled: false to enabled: true
  db: {
    enabled: false,
  }
};
