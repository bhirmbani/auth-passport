const jwt = require('jsonwebtoken');
const methods = {};

methods.auth = (req, res, next) => {
  if(req.headers.token === undefined) {
    res.send(`not authorized!`);
  } else {
    jwt.verify(req.headers.token, 'secret', (err, decoded) => {
      if(decoded) {
        req.decoded = decoded;
        next();
      } else {
        res.send('unauthorized, need token to access');
      }
    });
  }
}

module.exports = methods;