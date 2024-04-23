const express = require("express");
const { authenticate, authenticateParams } = require("../middlewares/authMiddleWare");
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

// profileDataRouter.get("/:token", getProfileDataControllers);

profileDataRouter.route("/:token").get(authenticateParams, getProfileDataControllers);

profileDataRouter.route("/contact").post(authenticate, postProfileDataContactControllers);

profileDataRouter.route("/address").post(authenticate, postProfileDataAddressControllers);

profileDataRouter.route("/card").post(authenticate, postProfileDataCardControllers);

profileDataRouter.post("/postImage", authenticate, profileImageUpload.single("profileImage"), postProfileImageControllers);

profileDataRouter.put("/editContact/:index", authenticate, editContactController);

profileDataRouter.put("/address/:index", authenticate, editProfileDataAddressControllers);

profileDataRouter.delete("/delProfilePic/:token", authenticateParams, delProfilePicControllers);

profileDataRouter.delete("/delContact/:token/:index", authenticateParams, delContactControllers);

profileDataRouter.delete("/delAddress/:token/:index", authenticateParams, delAddressControllers);

profileDataRouter.delete("/delCard/:token/:index", authenticateParams, delCardControllers);

module.exports = profileDataRouter;
