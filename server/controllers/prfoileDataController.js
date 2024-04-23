const MainModel = require("../models/profileDataSchema");
const userDataSchema = require("../models/userDataSchema");
const asyncHandler = require("../middlewares/catchAsyncError");
const fs = require("fs");

// exports.postProfileDetailsController = async (req, res) => {
// 	const profile = {};
// };

exports.getProfileDataControllers = asyncHandler(async (req, res) => {
	try {
		const { id } = req.userParams;

		const profileData = await MainModel.findOne({ id });

		if (!profileData) {
			return res.status(404).send("Profile data not found");
		}
		res.json(profileData);
	} catch (error) {
		res.status(500).send("Error fetching profile data");
	}
});

exports.postProfileDataContactControllers = asyncHandler(async (req, res) => {
	try {
		const { contactNumbers } = req.body;
		const { id } = req.user;
		let existingDocument = await MainModel.findOne({ id });

		if (existingDocument) {
			if (existingDocument.contactNumbers && existingDocument.contactNumbers.length > 0) {
				existingDocument.contactNumbers.push(...contactNumbers);
				existingDocument = await existingDocument.save();
				res.send(existingDocument);
			} else {
				existingDocument.contactNumbers = contactNumbers;
				existingDocument = await existingDocument.save();
				res.send(existingDocument);
			}
		} else {
			const newDocument = await MainModel.create({ id, contactNumbers });
			res.send(newDocument);
		}
	} catch (error) {
		console.error("Error processing profile data:", error);
		res.status(400).send("Error processing profile data");
	}
});

exports.postProfileDataAddressControllers = asyncHandler(async (req, res) => {
	try {
		const { addresses } = req.body;
		const { id } = req.user;
		let existingDocument = await MainModel.findOne({ id });

		if (existingDocument) {
			if (existingDocument.addresses && existingDocument.addresses.length > 0) {
				existingDocument.addresses.push(...addresses);
				existingDocument = await existingDocument.save();
				res.send(existingDocument);
			} else {
				existingDocument.addresses = addresses;
				existingDocument = await existingDocument.save();
				res.send(existingDocument);
			}
		} else {
			const newDocument = await MainModel.create({ id, addresses });
			res.send(newDocument);
		}
	} catch (error) {
		console.error("Error processing profile data:", error);
		res.status(400).send("Error processing profile data");
	}
});

exports.postProfileDataCardControllers = asyncHandler(async (req, res) => {
	try {
		const { cardType, cardNumber, ownerName } = req.body;
		const { id } = req.user;
		let existingDocument = await MainModel.findOne({ id });

		if (existingDocument) {
			if (existingDocument.cards && existingDocument.cards.length > 0) {
				existingDocument.cards.push({ cardType, cardNumber, ownerName });
				existingDocument = await existingDocument.save();
				res.send(existingDocument);
			} else {
				existingDocument.cards = [{ cardType, cardNumber, ownerName }];
				existingDocument = await existingDocument.save();
				res.send(existingDocument);
			}
		} else {
			const newDocument = await MainModel.create({
				id,
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
		const {id} = req.user;
		const imageName = req.file.filename;
		const existingDocument = await MainModel.findOne({ id });

		// console.log(existingImage);
		if (existingDocument) {
			const existingImage = existingDocument.profilePicture;
			existingDocument.profilePicture = imageName;
			await existingDocument.save();
			res.send(existingDocument);
			if (existingImage) {
				fs.unlinkSync("./uploads/profilePicture/" + existingImage);
			}
			// console.log(imageName);
		} else {
			await MainModel.create({ token: id, profilePicture: imageName }).then((response) => {
				res.send(response);
			});
		}
	} catch (error) {
		console.log(error);
	}
});

exports.editContactController = asyncHandler(async (req, res, next) => {
	const { index } = req.params;
	const { contactNumbers } = req.body;
	const {id} = req.user;
	try {
		const doc = await MainModel.findOne( {id} );
		console.log(doc);
		doc.contactNumbers[index] = contactNumbers[0];
		await doc.save();
		console.log(doc)
		res.send(doc);
	} catch (error) {
		console.log(error);
		res.status(500).json({ success: false, message: "Internal server error" });
	}
}
);

exports.editProfileDataAddressControllers = asyncHandler(async (req, res, next) => {
	const { index } = req.params;
	const { addresses } = req.body;
	const {id} = req.user;
	try {
		const doc = await MainModel.findOne({ id });
		doc.addresses[index] = addresses[0];
		await doc.save();
		res.send(doc);
	} catch (err) {
		res.send("Something went wrong");
	}
});

exports.delProfilePicControllers = asyncHandler(async (req, res, next) => {
	const {id} = req.userParams;
	try {
		const doc = await MainModel.findOne({ id });
		if (doc.profilePicture) {
			fs.unlinkSync("./uploads/profilePicture/" + doc.profilePicture);
			doc.profilePicture = "";
			await doc.save();
			res.send(doc);
		} else {
			res.send("No profile picture found");
		}
	} catch (error) {
		res.send("Something went wrong");
	}
});

exports.delContactControllers = asyncHandler(async (req, res, next) => {
	const { index } = req.params;
	const {id} = req.userParams;
	try {
		const doc = await MainModel.findOne({ id });
		doc.contactNumbers.splice(index, 1);
		await doc.save();
		res.send(doc);
	} catch (error) {
		res.send("Something went wrong");
	}
});

exports.delAddressControllers = asyncHandler(async (req, res, next) => {
	const { index } = req.params;
	const {id} = req.userParams;
	try {
		const doc = await MainModel.findOne({ id });
		doc.addresses.splice(index, 1);
		await doc.save();
		res.send(doc);
	} catch (error) {
		res.send("Something went wrong");
	}
});

exports.delCardControllers = asyncHandler(async (req, res, next) => {
	const { index } = req.params;
	const {id} = req.userParams;
	try {
		const doc = await MainModel.findOne({ id });
		doc.cards.splice(index, 1);
		await doc.save();
		res.send(doc);
	} catch (error) {
		res.send("Something went wrong");
	}
});
