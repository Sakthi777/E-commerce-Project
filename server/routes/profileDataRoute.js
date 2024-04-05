const express = require("express");
const { getProfileDataControllers, postProfileDataContactControllers, postProfileDataAddressControllers, postProfileDataCardControllers, postProfileImageControllers } = require("../controllers/prfoileDataController");
const profileImageUpload = require("../middlewares/profileImageMulter");
const profileDataRouter = express.Router();

// exports.postProfileDataControllers = async (req, res) => {
// 	console.log(req.body);
// };

profileDataRouter.get("/:token", getProfileDataControllers);

profileDataRouter.post("/contact", postProfileDataContactControllers);

profileDataRouter.post("/address", postProfileDataAddressControllers);

profileDataRouter.post("/card", postProfileDataCardControllers);

profileDataRouter.post("/postImage", profileImageUpload.single("profileImage"), postProfileImageControllers);

module.exports = profileDataRouter;
