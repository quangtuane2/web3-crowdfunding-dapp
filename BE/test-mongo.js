const mongoose = require('mongoose');

const uri_srv = "mongodb+srv://quangtuane2_db_user:1QvMZ0mgm0Pegxva@cluster0.omlaqgd.mongodb.net/blockchain_donation?retryWrites=true&w=majority";
const uri_direct = "mongodb://quangtuane2_db_user:1QvMZ0mgm0Pegxva@ac-ay545z4-shard-00-00.omlaqgd.mongodb.net:27017,ac-ay545z4-shard-00-01.omlaqgd.mongodb.net:27017,ac-ay545z4-shard-00-02.omlaqgd.mongodb.net:27017/blockchain_donation?ssl=true&replicaSet=atlas-ay545z4-shard-0&authSource=admin&retryWrites=true&w=majority";

async function test() {
  console.log("Testing SRV...");
  try {
    await mongoose.connect(uri_srv, { serverSelectionTimeoutMS: 5000 });
    console.log("SRV SUCCESS");
    process.exit(0);
  } catch (e) {
    console.log("SRV FAILED:", e.message);
  }

  console.log("Testing DIRECT...");
  try {
    await mongoose.connect(uri_direct, { serverSelectionTimeoutMS: 5000 });
    console.log("DIRECT SUCCESS");
    process.exit(0);
  } catch (e) {
    console.log("DIRECT FAILED:", e.message);
  }
  process.exit(1);
}

test();
