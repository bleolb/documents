;
'use strict'

const jwt = require('jsonwebtoken')


let autentificar = (req, res, next) => {
    let token = req.headers.authorization || null
    jwt.verify(token, req.sessionID, (err, decode) => {
        if (err) {
            console.log(req.sessionID)
            console.log(err)
            return res.status(404).json({
                data: null,
                msg: 'Token Inválido'
            })
        } else {
            reqreq.decode = decode;

            let token = jwt.sign({ data: decode.data }, process.env.KEY_JWT, {
                algorithm: "HS256",
                expiresIn: 300,
            });

            req.token = token;

            next();
        }
    });
}
module.exports = {
    autentificar
}