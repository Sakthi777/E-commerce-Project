const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema({
	token: { type: String },
	currentBalance: { type: Number },
	transactionList: [{ type: Number }],
});

const walletModel = mongoose.model("WalletData", walletSchema);
module.exports = walletModel;
