const verifyToken = require('../lib/auth').verifyToken;

const verify = (req, res, next) => {
  const authHeader = req.get('Authorization');
  console.log(authHeader);
  if(!authHeader || !authHeader.startsWith('Bearer')) {
    return res.sendStatus(401);
  }else {
    const token = authHeader.replace('Bearer ', '');
    verifyToken(token)
        .then(user => {
          req.user = user;
          next();
        })
        .catch(error => res.status(401).send({
          error: "JWT Token invalid"
        }));
  }
};

module.exports = verify;