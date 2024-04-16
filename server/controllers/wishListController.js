const asyncHandler = require("../middlewares/catchAsyncError");
const wishListModel = require("../models/wishListSchema");

exports.postWishListController = asyncHandler(async (req, res, next) => {
	try {
		const { token, productId } = req.body;
		let doc = await wishListModel.findOne({ token });
		if (doc) {
			if (doc.productID.includes(productId)) {
				doc.productID = doc.productID.filter((product) => product !== productId);
			} else {
				doc.productID.push(productId);
			}
			await doc.save();
			res.send(doc);
		} else {
			const newDoc = await wishListModel.create({ token: token, productID: [productId] }).then((response) => {
				res.send(response);
			});
		}
	} catch (err) {
		res.send(err);
	}
});

exports.getWishListController = asyncHandler(async (req, res, next) => {
	try {
		const { token } = req.params;
		await wishListModel
			.findOne({ token })
			.then((response) => {
				res.send(response);
			})
			.catch((err) => {
				res.send("Not Found");
			});
	} catch (err) {
		res.send(err);
	}
});

exports.deleteWishListController = asyncHandler(async (req, res, next) => {
	try {
		const { token, id } = req.params;
		let doc = await wishListModel.findOne({ token });
		doc.productID = doc.productID.filter((item) => item !== id);
		await doc.save();
		res.send(doc);
	} catch (err) {
		console.log(err);
	}
});
