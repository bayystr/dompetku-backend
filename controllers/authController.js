const User = require('../models/User');

const loginAdmin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ success: false, message: 'Email atau password salah' });
    }

    res.json({
      success: true,
      message: 'Login berhasil',
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { loginAdmin };