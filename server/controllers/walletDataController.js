const asyncHandler = require("../middlewares/catchAsyncError");
const walletModel = require("../models/walletDataSchema");

exports.postWalletData = asyncHandler(async (req, res, next) => {
	try {
		const { token, amountToAdd } = req.body;
		let existingDoc = await walletModel.findOne({ token });
		if (existingDoc) {
			existingDoc.currentBalance += parseInt(amountToAdd);
			existingDoc.transactionList.push(amountToAdd);
			await existingDoc.save();
			res.send(existingDoc);
		} else {
			await walletModel.create({ token: token, currentBalance: amountToAdd, transactionList: [amountToAdd] }).then((response) => res.send(response));
		}
	} catch (error) {
		res.send(error);
	}
});

exports.getWalletData = asyncHandler(async (req, res, next) => {
	try {
		const { token } = req.params;
		let doc = await walletModel.findOne({ token });
		if (doc) {
			res.send(doc);
		} else {
			res.send("Not Found");
		}
	} catch (error) {
		res.send(error);
	}
});
