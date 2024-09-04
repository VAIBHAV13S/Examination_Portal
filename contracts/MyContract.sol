// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract ExamPlatform {
    struct Exam {
        uint id;
        string title;
        address examiner;
        bool isActive;
    }

    uint public examCount;
    mapping(uint => Exam) public exams;

    function createExam(string memory _title) public {
        examCount++;
        exams[examCount] = Exam(examCount, _title, msg.sender, true);
    }

    function getExam(uint _examId) public view returns (string memory, address, bool) {
        Exam memory exam = exams[_examId];
        return (exam.title, exam.examiner, exam.isActive);
    }

    function closeExam(uint _examId) public {
        require(exams[_examId].examiner == msg.sender, "Only the examiner can close the exam");
        exams[_examId].isActive = false;
    }
}
