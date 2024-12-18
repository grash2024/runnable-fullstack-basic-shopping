const handleLogin = async (req, res, next) => {
	try {
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};
const handleRegister = async (req, res, next) => {
	try {
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};
export { handleLogin, handleRegister };
