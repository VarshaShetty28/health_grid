// import jwt from 'jsonwebtoken';
// //user authentication middle wear
// const authUser = async (req, res, next) => {
//   try {
//     const token = req.headers['token'] || req.headers['Atoken'] || req.headers['Atoken'.toLowerCase()];

//     if (!token) {
//       return res.json({ success: false, message: 'Token missing. Not authorized, login again.' });
//     }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     if (decoded.email !== process.env.ADMIN_EMAIL) {
//       return res.json({ success: false, message: 'Invalid token. Not authorized, login again.' });
//     }

//     next();
// try{
//     const {token} = req.headers
//     if(!token){
//         return res.json({ success: false, message: 'Token missing. Not authorized, login again.' })
//     }
//     const token_decoded = jwt.verify(token, process.env.JWT_SECRET)
//     req.body.userId = token_decoded.id

//     next()
//   } 
//   catch (err) {
//     return res.json({ success: false, message: 'Invalid token. Not authorized, login again.' });
//   }
// };

// export default authUser;
import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.json({
        success: false,
        message: 'Token missing. Not authorized, login again.'
      });
    }

    const token_decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = token_decoded; 

    next();
  } catch (err) {
    return res.json({
      success: false,
      message: 'Invalid token. Not authorized, login again.'
    });
  }
};

export default authUser;
