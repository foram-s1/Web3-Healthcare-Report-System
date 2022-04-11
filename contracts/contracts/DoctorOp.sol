// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

contract DoctorOpinoin{ 
    mapping (address=>bool) public isDoctor;
    mapping (address=>bool) public isImageReport;
    string diagnosis;
    string analysis;
	string signature;
    bool lock;


    constructor(address _doctor,address _imageReport,string  memory _diagnosis,string memory  _analysis,string  memory _signature ){
        isDoctor[_doctor] = true;
        isImageReport[_imageReport] = true;
        diagnosis = _diagnosis;
        analysis = _analysis;
        signature = _signature;
        lock = false;
    }

    modifier onlyDoctor{
        require(isDoctor[msg.sender],"Only Consult Doctor can view the report" );
        _;
    }

    modifier onlyReport{
        require(isImageReport[msg.sender],"Only Parent Report can view the diagnosis");
        _;
    }

    function addDoctor(address _doc) public onlyReport {
        isDoctor[_doc] = true;
    }

    function addReport(address _report) public onlyReport {
        isImageReport[_report] = true;
    }

    function addDiagnosis(string  memory _diagnosis,string memory  _analysis,string  memory _signature) public onlyDoctor{
        require(lock,"Report is Locked By Doctor and you can't edit");
        diagnosis = _diagnosis;
        analysis = _analysis;
        signature = _signature;
    }

    function getDiagnosis() public view onlyReport returns(string memory) {
        return diagnosis;
    }
    function getAnalysis() public view onlyReport returns(string memory) {
        return analysis;
    }


}