;
'use strict'

let gestionDocumentos = (http) => {
    let io = require('socket.io')(http)
    let socketJwt = require('socketio-jwt')
// IO usa jwt 

    io.use(socketJwt.authorize({
        secret : process.env.KEY_JWT,
        handshake : true
    }));

      const gestionDatos = {}
        io.on('connection', socket => {
        let anteriorId
        const safeJoin = actualId => {
        //salir de la sala
        socket.leave(anteriorId)
        //unirme a sala
        socket.join(actualId);
        anteriorId=actualId
        }
      
        socket.on('getDoc', docId => {
            safeJoin(docId)
            socket.emit('gestionDato', gestionDatos[docId])
        })
        socket.on('addDoc', doc => {
            let room = Object.keys(gestionDatos)
            let numberRoom = room.length +1
            let roomName = `documento ${numberRoom}`
            doc.id = roomName
            safeJoin(doc.id)
            gestionDatos[doc.id] = doc
            io.emit('gestionDatos', Object.keys(gestionDatos))
            socket.emit('gestionDato', doc)
        
        })
        socket.on('editDoc', doc => {
            gestionDatos[doc.id] = doc
            socket.to(doc.id).emit('gestionDato', doc)
        })
        io.emit('gestionDatos', Object.keys(gestionDatos))
    })
}

module.exports=gestionDocumentos