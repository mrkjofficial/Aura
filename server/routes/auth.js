const router = require("express").Router();

const CryptoJS = require("crypto-js");

const User = require("../models/User");

router.post("/login", async (req, res) => {
	try {
		const user = await User.findOne({ username: req.body.username });
		if (user) {
			const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_PASSPHRASE);
			const savedPassword = bytes.toString(CryptoJS.enc.Utf8);
			if (savedPassword === req.body.password) {
				const { password, ...others } = user._doc;
				res.status(200).json(others);
			} else {
				res.status(401).json("Invalid Password!");
			}
		}
		else {
			res.status(404).json("User Not Found!");
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

router.post("/register", async (req, res) => {
	const newUser = new User({
		username: req.body.username,
		email: req.body.email,
		password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_PASSPHRASE).toString(),
	});
	try {
		const savedUser = await newUser.save();
		const { password, ...others } = savedUser._doc;
		res.status(201).json(others);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
