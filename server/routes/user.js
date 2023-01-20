const router = require("express").Router();

const User = require("../models/User");

const { verifyTokenAndAdmin, verifyTokenAndAuthorization } = require("../middlewares/verification");

// GET USER
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		const { password, ...details } = user._doc;
		res.status(200).json(details);
	} catch (err) {
		res.status(500).json(err);
	}
});

// GET ALL USERS
router.get("/", verifyTokenAndAdmin, async (req, res) => {
	const query = req.query.new;
	try {
		const users = query ? await User.find().sort({ _id: -1 }).limit(5) : await User.find();
		res.status(200).json(users);
	} catch (err) {
		res.status(500).json(err);
	}
});

// GET USERS STATS
router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
	const today = new Date();
	const lastYear = new Date(today.setFullYear(today.getFullYear() - 1));
	try {
		const data = await User.aggregate([
			{ $match: { createdAt: { $gte: lastYear } } },
			{ $project: { month: { $month: "$createdAt" } } },
			{ $group: { _id: "$month", total: { $sum: 1 } } },
		]);
		console.log(data);
		res.status(200).json(data);
	} catch (err) {
		res.status(500).json(err);
	}
});

// UPDATE USER
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
	if (req.body.password) {
		req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET).toString();
	}
	try {
		const updatedUser = await User.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		res.status(200).json(updatedUser);
	} catch (err) {
		res.status(500).json(err);
	}
});

// DELETE USER
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
	try {
		await User.findByIdAndDelete(req.params.id);
		res.status(200).json("Delete Successful!");
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
