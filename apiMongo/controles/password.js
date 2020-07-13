;
'use strict'

const bcrypt = require('bcrypt')


let codificar = (req, res, next) => {
    let usuario = req.body.usuario || null
    if (!usuario || !usuario.passw) {
        return res.status(401).send('usuario o contraseña invalidos')
    } else {
        let codificarpassword = bcrypt.hashSync(usuario.passw, bcrypt.genSaltSync(10))
        if (codificarpassword) {
            req.body.usuario.passw = codificarpassword
            req.body.usuario.createAt = new Date()
            if (req.sessionID) {
                req.body.usuario.sessionID = req.sessionID
                next()
            } else {
                return res.status(401).send('sesi{on invalidos')
            }
        } else {
            return res.status(401).send('no se encrypto su contraseña')
        }
    }
}

module.exports = { codificar }