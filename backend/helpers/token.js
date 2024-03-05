const jwt = require('jsonwebtoken');

class TokenHelper {
    async generateToken(payload){
       const token = jwt.sign(payload, process.env.JWTSECRET, {expiresIn: '1h'} );
       return token;
    }
}