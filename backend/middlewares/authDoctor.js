// Fixed authDoctor middleware
import jwt from 'jsonwebtoken';

const authDoctor = async (req, res, next) => {
  try {
    const token = req.headers['dtoken'];

    // Check if token is missing
    if (!token) {
      return res.json({
        success: false,
        message: 'Token missing. Not authorized, login again.'
      });
    }

    // Verify and decode token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Initialize req.body if it doesn't exist (for GET requests)
    if (!req.body) {
      req.body = {};
    }
    
    // Attach doctor ID to request
    req.body.docId = decoded.id;
    
    // Also add to req.user for better practice
    req.user = {
      docId: decoded.id,
      id: decoded.id
    };
    
    console.log('Doctor ID attached successfully:', decoded.id);
    next();

  } catch (err) {
    console.log('JWT verification error:', err.message);
    return res.json({
      success: false,
      message: 'Invalid token. Not authorized, login again.'
    });
  }
};

export default authDoctor;