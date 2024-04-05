const MainModel = require("../models/profileDataSchema");
const asyncHandler = require("../middlewares/catchAsyncError");
const fs = require("fs");

// exports.postProfileDetailsController = async (req, res) => {
// 	const profile = {};
// };

exports.getProfileDataControllers = async (req, res) => {
	try {
		const { token } = req.params;
		const profileData = await MainModel.findOne({ token });
		if (!profileData) {
			return res.status(404).send("Profile data not found");
		}
		res.json(profileData);
	} catch (error) {
		console.error("Error fetching profile data:", error);
		res.status(500).send("Error fetching profile data");
	}
};

exports.postProfileDataContactControllers = asyncHandler(async (req, res) => {
	try {
		const { token, contactNumbers } = req.body;
		let existingDocument = await MainModel.findOne({ token });

		if (existingDocument) {
			if (existingDocument.contactNumbers && existingDocument.contactNumbers.length > 0) {
				existingDocument.contactNumbers.push(...contactNumbers);
				existingDocument = await existingDocument.save();
				res.send("Contact numbers added to existing document");
			} else {
				existingDocument.contactNumbers = contactNumbers;
				existingDocument = await existingDocument.save();
				res.send("Contact numbers added to existing document");
			}
		} else {
			const newDocument = await MainModel.create({ token, contactNumbers });
			res.send(newDocument);
		}
	} catch (error) {
		console.error("Error processing profile data:", error);
		res.status(400).send("Error processing profile data");
	}
});

exports.postProfileDataAddressControllers = asyncHandler(async (req, res) => {
	try {
		const { token, addresses } = req.body;
		let existingDocument = await MainModel.findOne({ token });

		if (existingDocument) {
			if (existingDocument.addresses && existingDocument.addresses.length > 0) {
				existingDocument.addresses.push(...addresses);
				existingDocument = await existingDocument.save();
				res.send("Addresses added to existing document");
			} else {
				existingDocument.addresses = addresses;
				existingDocument = await existingDocument.save();
				res.send("Addresses added to existing document");
			}
		} else {
			const newDocument = await MainModel.create({ token, addresses });
			res.send(newDocument);
		}
	} catch (error) {
		console.error("Error processing profile data:", error);
		res.status(400).send("Error processing profile data");
	}
});

exports.postProfileDataCardControllers = asyncHandler(async (req, res) => {
	try {
		const { token, cardType, cardNumber, ownerName } = req.body;
		let existingDocument = await MainModel.findOne({ token });

		if (existingDocument) {
			if (existingDocument.cards && existingDocument.cards.length > 0) {
				existingDocument.cards.push({ cardType, cardNumber, ownerName });
				existingDocument = await existingDocument.save();
				res.send("Card added to existing document");
			} else {
				existingDocument.cards = [{ cardType, cardNumber, ownerName }];
				existingDocument = await existingDocument.save();
				res.send("Card added to existing document");
			}
		} else {
			const newDocument = await MainModel.create({
				token,
				cards: [{ cardType, cardNumber, ownerName }],
			});
			res.send(newDocument);
		}
	} catch (error) {
		console.error("Error processing card data:", error);
		res.status(400).send("Error processing card data");
	}
});

exports.postProfileImageControllers = asyncHandler(async (req, res, next) => {
	try {
		const token = req.body.token;
		const imageName = req.file.filename;
		const existingDocument = await MainModel.findOne({ token });
		const existingImage = existingDocument.profilePicture;
		console.log(existingImage);
		if (existingDocument) {
			existingDocument.profilePicture = imageName;
			existingDocument.save();
			res.send(existingDocument);
			// console.log(imageName);
		} else {
			await MainModel.create({ token: token, profilePicture: imageName }).then((response) => {
				res.send(response);
			});
		}
		if (existingImage) {
			fs.unlinkSync("./uploads/profilePicture/" + existingImage);
		}
	} catch (error) {
		console.log(error);
	}
});
