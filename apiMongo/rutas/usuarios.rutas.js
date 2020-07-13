;
'use strict'
const express = require('express');
let api = express.Router(),
    usuarioControl = require('../controles/usuarios.control');


api.post ('/login',usuarioControl.login )

module.exports = api
