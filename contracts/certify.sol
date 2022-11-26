// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract auth {
    struct certificate {
        string name;
        string subject;
        uint256 id;
        string duration;
    }

    mapping(uint256 => certificate) public mapdata;

    function store(
        uint256 _id,
        string memory _name,
        string memory _subject,
        string memory _duration
    ) public {
        mapdata[_id] = certificate(_name, _subject, _id, _duration);
    }

    function retrive(uint256 _id) public view returns (certificate memory) {
        return mapdata[_id];
    }
}
