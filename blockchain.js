function Blockchain(){

	this.chain = []; //arrays of blocks
	this.newTransactions=[]; // arrays of transactions 
}


Blockchain.prototype.createNewBlock = function(nonce,prevoiusHash,hash){ //create blocks and push it into chain array
// createneblock is method 
const newBlock={
index:this.chain.Length+1,//block number
Timestamp:Data.now(),
transactions:this.newTransactions,
//put all of the new tranactions have been created in new block they can never be changes 
//each block has his own transactions may be one may be many so after that's in the end will just clear out array for new tranactions for new incoming block
nonce:nonce,
//bascicallly comes form proof of work its simply just a number (any number)
hash:hash,
//all of transaction be compressend into string a code aa single string that will be our hash 
prevoiusHash:prevoiusHash,
//data prevoius block

//set ur goals high, and don't stop till you get there  


};

this.newTransactions=[];
//empty array clear out this entire new transaction array so we can start over for the next block then 
this.chain.push(newBlock);
return newBlock;

}//end function 
bitcoin= new Blochchain();
bitcoin.createNewBlock (239,"0xz","zzz");
console.log(bitcoin);
console.log(bitcoin);





