import jwt from 'jsonwebtoken';

const authAdmin = async (req, res, next) => {
  try {
    // Fix: Check for the correct token header (lowercase 'atoken')
    const token = req.headers.atoken;

    if (!token) {
      return res.json({ success: false, message: 'Token missing. Not authorized, login again.' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.email !== process.env.ADMIN_EMAIL) {
      return res.json({ success: false, message: 'Invalid token. Not authorized, login again.' });
    }

    next();
  } catch (err) {
    console.log("Auth error:", err);
    return res.json({ success: false, message: 'Invalid token. Not authorized, login again.' });
  }
};

export default authAdmin;