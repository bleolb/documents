;
'use strict' 
const express = require('express'),
    bodyParser = require('body-parser'),
    connectDb = require('../config/db'),
    passport = require('passport'),
    cors = require('cors'),
    parseurl = require('parseurl')

let app = express(),
    session = require('express-session'),
    usuarioRuta = require('../rutas/usuarios.rutas'),
    fileRuta = require('../rutas/files.rutas'),
    db = connectDb(),
    sess = {
        secret: process.env.KEY_SESSION,
        resave: false,
        saveUninitialized: true,
        name: 'sessionID',
        cookie: {
            httpOnly: false,
            maxAge: parseInt(process.env.TIEMPO)
        }
    },
    corsOptions = {
        origin: 'http://localhost:4200',
        optionsSuccessStatus: 200
    }
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json())

// cors
app.use(cors(corsOptions))

//session 
app.use(session(sess))

// passport
app.use(passport.initialize())
app.use(passport.session())

//ejemplos
app.use((req, res, next) => {
    if (!req.session.views) {
        req.session.views = {};
    }
    let pathname = parseurl(req).pathname
    req.session.views[pathname] = (req.session.views[pathname] || 0) + 1;
    next()
});
   

app.get('/prueba1',  (req, res, next)=>{
    res.send('tu pagina es'+req.session.views['/prueba1'] + 'times')
})

app.use('/api',usuarioRuta)
app.use('/api',fileRuta)

module.exports = app