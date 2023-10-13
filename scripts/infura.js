const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('YOUR_ETHEREUM_NODE_URL'));

const contractAddress = 'YOUR_CONTRACT_ADDRESS';
const contractABI = [...]; // Chèn ABI của contract của bạn vào đây

const contract = new web3.eth.Contract(contractABI, contractAddress);

// Sau đó, bạn có thể gọi các hàm trong contract của bạn như createAchievement hoặc claimed:

// Ví dụ: Gọi hàm createAchievement
contract.methods.createAchievement(5, 100, "IPFS_CID_5KM").send({ from: 'YOUR_ADMIN_ADDRESS' })
    .on('transactionHash', function(hash){
        console.log(`Transaction hash: ${hash}`);
    })
    .on('receipt', function(receipt) {
        console.log(`Achievement created. Transaction receipt:`, receipt);
    })
    .on('error', console.error);

// Ví dụ: Gọi hàm claimed
contract.methods.claimed(userId, kmGain).send({ from: 'YOUR_ADMIN_ADDRESS' })
    .on('transactionHash', function(hash){
        console.log(`Transaction hash: ${hash}`);
    })
    .on('receipt', function(receipt) {
        console.log(`NFT claimed. Transaction receipt:`, receipt);
    })
    .on('error', console.error);