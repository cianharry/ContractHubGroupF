// middleware function
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  // using the express headers to assign the auth value to the token
  // splits the return at whitespace into an array and takes the value at position 1 whcih is the token
  try {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, 'this-is-a-long-secret');
    console.log(token);
    next();
  } catch (error) {
    res.status(401).json({ message: "Auth-check failed" });
  }
};
