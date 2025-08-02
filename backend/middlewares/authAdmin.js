import jwt from 'jsonwebtoken';

const authAdmin = async (req, res, next) => {
  try {
    const token = req.headers['atoken'] || req.headers['Atoken'] || req.headers['Atoken'.toLowerCase()];

    if (!token) {
      return res.json({ success: false, message: 'Token missing. Not authorized, login again.' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.email !== process.env.ADMIN_EMAIL) {
      return res.json({ success: false, message: 'Invalid token. Not authorized, login again.' });
    }

    next();
  } catch (err) {
    return res.json({ success: false, message: 'Invalid token. Not authorized, login again.' });
  }
};

export default authAdmin;
