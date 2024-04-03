const express = require("express");
const { getProfileDataControllers, postProfileDataContactControllers, postProfileDataAddressControllers, postProfileDataCardControllers } = require("../controllers/prfoileDataController");
const profileDataRouter = express.Router();

// exports.postProfileDataControllers = async (req, res) => {
// 	console.log(req.body);
// };

profileDataRouter.get("/:token", getProfileDataControllers);

profileDataRouter.post("/contact", postProfileDataContactControllers);

profileDataRouter.post("/address", postProfileDataAddressControllers);

profileDataRouter.post("/card", postProfileDataCardControllers);

module.exports = profileDataRouter;
