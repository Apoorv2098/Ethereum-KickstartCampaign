pragma solidity^0.4.17;

contract CampaignFactory{
    address[] public deployesCampaigns;
    
    function createCampaign(uint minimum) public{
        
       address newCampaign = new Campaign(minimum,msg.sender);
       deployesCampaigns.push(newCampaign);
    }
    
    function getDeployedCampaigns() public view returns(address[]){
        return deployesCampaigns;
    }
}

contract Campaign{
    struct Request{
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address=>bool) approvals;
    }
    
    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    //address[] public approvers;
    mapping(address=>bool) public approvers;
    uint public approversCount;
    
    modifier restricted(){
        require(msg.sender==manager);
        _;
    }
    
    function Campaign(uint minimum,address creator)public{
        manager=creator;
        minimumContribution=minimum;
    }
    
    function contribute() public payable{
        require(msg.value>minimumContribution);
        //Gocha 1. key is not stored in the mapping.
        approvers[msg.sender]=true;
        approversCount++;
    }
    
    function createRequest(string description,uint value,address recipient)public restricted{
        
        Request memory newRequest= Request({
            description:description,
            value:value,
            recipient:recipient,
            complete:false,
            approvalCount:0
            //we dont need to initialize refrence type object like mapping
        });
        requests.push(newRequest);
    }
    
    function approveRequst(uint index) public{
        require(approvers[msg.sender]);
        require(!requests[index].approvals[msg.sender]);
        
        requests[index].approvals[msg.sender]=true;
        requests[index].approvalCount++;
    }
    
    function finalizeRequest(uint index)public restricted{
        require(!requests[index].complete);
        require(requests[index].approvalCount>(approversCount/2));
    
        requests[index].recipient.transfer(requests[index].value);
        requests[index].complete=true;
    }

    function getSummary() public view returns(
        uint,uint,uint,uint,address
    ){
        return(
            minimumContribution,
            this.balance,
            requests.length,
            approversCount,
            manager
        );
    }

    function getRequestsCount() public view returns(uint){
        return requests.length;
    }
}