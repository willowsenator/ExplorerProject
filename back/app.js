const express = require("express");
const app = express();
const {Web3} = require("web3");
const cors = require("cors");

app.use(cors())
const PORT = 4000;

const MUMBAI_RPC = "https://polygon-mumbai.g.alchemy.com/v2/FX3qHoCqEqesrN33uw-DmFEf70Jh3UiO";

const web3 = new Web3(MUMBAI_RPC);


app.get("/", async (req, res)=>{
    try{
        const blockNumber = (await web3.eth.getBlockNumber()).toString();
        res.send({blockNumber}).status(200);
    } catch(ex){
        res.send({error:ex.message}).send(500);
    }
});

app.get("/block/:blockNumber", async (req, res)=>{
    try{
        const block = (await web3.eth.getBlock(req.params.blockNumber));
        const blockDetails = {
            difficulty: block.difficulty.toString(),
            baseFeePerGas: block.baseFeePerGas.toString(),
            miner: block.miner.toString(),
            gasLimit: block.gasLimit.toString(),
            nonce: block.nonce.toString(),
            size: block.size.toString()
        }
        res.send(blockDetails).status(200);
    } catch(ex){
        res.send({error: ex.message}).status(500);
    }
    
});

app.get("/tx/:tx", async (req, res) => {
    try {
        const tx = await web3.eth.getTransaction(req.params.tx);
        console.log(tx);

        const txDetail = {
            blockHash: tx.blockHash.toString(),
            gas: tx.gas.toString(),
            hash: tx.hash.toString(),
            chainId: tx.chainId.toString(),
            gasPrice: tx.gasPrice.toString(),
            value: tx.value.toString()
        }
        res.status(200).send(txDetail);
    } catch (ex) {
        console.error(ex);
        res.status(500).send({ error: ex.message });
    }
});


app.get("/balance/:account", async (req, res) => {
    try {
        const account = req.params.account;
        const balanceWei = (await web3.eth.getBalance(account)).toString();
        const balanceEther = web3.utils.fromWei(balanceWei, "ether").toString();

        console.log(`Balance in Wei: ${balanceWei}`);
        console.log(`Balance in Ether: ${balanceEther}`);

        res.status(200).send({ balanceWei, balanceEther });
    } catch (ex) {
        console.error(ex);
        res.status(500).send({ error: ex.message });
    }
});


app.listen(PORT, ()=>{
    console.log("Listening in %s", PORT);
});