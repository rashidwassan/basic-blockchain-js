class Block {
    constructor(data) {
            this.hash = "",
            this.height = 0,
            this.body = data,
            this.time = 0,
            this.previousblockhash = "";
    }
}

class BlockChain{
    constructor(){
        this.chain = [];
    }

    addBlock(newBlock){
        this.chain.push(newBlock);
    }
}