;
'use strict'

const express = require('express'),
multiParty = require('connect-multiparty'),
controlpassword = require('../controles/password')
let api = express.Router(),
        filesControl = require('../controles/files.controler')
        galeriaMiddLeware = multiParty({ uploadDir: './files/galeria' }),
     pdfMiddLeware = multiParty({ uploadDir: './files/pdf' })
     
api.post('/upload_file',galeriaMiddLeware,filesControl.uploadFile)
api.post('/upload_pdf',pdfMiddLeware,filesControl.uploadFile)
api.get('/view_file/:directorio/:urlFile',filesControl.verFile)
api.delete('/delete_file/:directorio/:urlFile',filesControl.deletFile)
api.put('/update_file/:directorio/:urlFile',galeriaMiddLeware,filesControl.updateFile)
api.put('/update_pdf/:directorio/:urlFile',pdfMiddLeware,filesControl.updateFile)


module.exports=api