const ganache = require('ganache-cli');
const Web3 = require('web3');
const {interface,bytecode} = require('../compile');
const assert = require('assert');
const web3 = new Web3(ganache.provider());

let accounts;
let inbox;
beforeEach(async () =>{
    accounts = await web3.eth.getAccounts();

    inbox = await new web3.eth.Contract(JSON.parse(interface))
                    .deploy({data:bytecode})
                    .send({from:accounts[0], gas:1000000})
});

describe('Inbox contract',()=>{

    it('deploys a contract',()=>{
        assert.ok(inbox.options.address)
    });

    
});

/** DOUBTS:
 * WHY TO ADDRESS IS NOT MENTIONED
 * HOW THE TO ADDRESS IS COMING IN HASH WITHOUT ANY MENTIONS
*/

    