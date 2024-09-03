// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract MyContract {
    string public name = "Blockchain Exam Platform";

    function setName(string memory _name) public {
        name = _name;
    }
}
