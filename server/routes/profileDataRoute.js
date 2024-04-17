const express = require("express");
const { authenticate } = require("../middlewares/authMiddleWare")
const {
	getProfileDataControllers,
	postProfileDataContactControllers,
	postProfileDataAddressControllers,
	postProfileDataCardControllers,
	postProfileImageControllers,
	delContactControllers,
	delAddressControllers,
	delCardControllers,
	delProfilePicControllers,
	editContactController,
	editProfileDataAddressControllers,
} = require("../controllers/prfoileDataController");
const profileImageUpload = require("../middlewares/profileImageMulter");
const profileDataRouter = express.Router();

// exports.postProfileDataControllers = async (req, res) => {
// 	console.log(req.body);
// };

profileDataRouter.get("/:token", getProfileDataControllers);

// profileDataRouter.post("/contact", postProfileDataContactControllers);

profileDataRouter.route("/contact").post(authenticate, postProfileDataContactControllers)

// profileDataRouter.post("/address", postProfileDataAddressControllers);

profileDataRouter.route("/address").post(authenticate, postProfileDataAddressControllers)


// profileDataRouter.post("/card", postProfileDataCardControllers);

profileDataRouter.route("/card").post(authenticate, postProfileDataCardControllers);


profileDataRouter.post("/postImage", profileImageUpload.single("profileImage"), postProfileImageControllers);

profileDataRouter.put("/editContact/:index", editContactController);

profileDataRouter.put("/address/:index", editProfileDataAddressControllers);

profileDataRouter.delete("/delProfilePic/:token", delProfilePicControllers);

profileDataRouter.delete("/delContact/:token/:index", delContactControllers);

profileDataRouter.delete("/delAddress/:token/:index", delAddressControllers);

profileDataRouter.delete("/delCard/:token/:index", delCardControllers);

module.exports = profileDataRouter;
