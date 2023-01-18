const jwt = require("jsonwebtoken");

// VERIFY TOKEN
const verifyToken = (req, res, next) => {
	const authHeader = req.headers.token;
	if (authHeader) {
		const token = authHeader.split(" ")[1];
		jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
			if (err) {
				res.status(403).json("Invalid Token!");
			}
			req.user = user;
			next();
		});
	} else {
		return res.status(401).json("Authentication Failed!");
	}
};

// VERIFY TOKEN AND ADMIN
const verifyTokenAndAdmin = (req, res, next) => {
	verifyToken(req, res, () => {
		if (req.user.isAdmin) {
			next();
		} else {
			res.status(403).json("Access Denied!");
		}
	});
};

// VERIFY TOKEN AND AUTHORIZATION
const verifyTokenAndAuthorization = (req, res, next) => {
	verifyToken(req, res, () => {
		if (req.user.id === req.params.id || req.user.isAdmin) {
			next();
		} else {
			res.status(403).json("Access Denied!");
		}
	});
};

module.exports = { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization };
