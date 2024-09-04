// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract MyContract {
    string public name;
    event ContractDeployed(string message);

    constructor() {
        name = "Blockchain Exam Platform";
        emit ContractDeployed("Contract successfully deployed");
    }

    function setName(string memory _name) public {
        name = _name;
    }
}
