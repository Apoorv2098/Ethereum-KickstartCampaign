import Web3 from 'web3';

let web3;

if(typeof window!=='undefined'&& typeof window.web3 !=='undefined'){
    //we are in the browser
    web3=new Web3(window.web3.currentProvider);
}
else{
    // we are on the server *OR* the user is not running metamask
    const provider=new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/7209664de350430ea81263edf064d210'
    );
    web3=new Web3(provider);
}

export default web3;