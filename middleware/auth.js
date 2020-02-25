const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = async function(req, res, next) {
  // Get token from header
  //You can change the header token content
  const token = req.header('x-auth-token-rufo');

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'No token, Authorization Denied!' });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoded.user;
    next();
  } catch (err) {
    console.error('Something Wrong with Auth Middleware');
    res.status(500).json({ msg: 'Server Error' });
  }
};
