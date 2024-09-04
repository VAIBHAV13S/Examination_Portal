const MyContract = artifacts.require("MyContract");

module.exports = function(deployer) {
    deployer.deploy(MyContract).then(() => {
        console.log("MyContract deployed successfully");
    }).catch((error) => {
        console.error("Deployment failed:", error);
    });
};
