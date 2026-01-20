const multer = require('multer')
const path = require('path')
const express = require('express')
const router = express.Router()
const FirstController = require('../controllers/firstcontroller')

const Storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"uploads")
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})

const FileFilters = (req,file,cb) =>{
    const AllowedTypes = /png|jpg|jpeg|svg/
    const extension = path.extname(file.originalname).toLowerCase()
    if(AllowedTypes.test(extension)){
        cb(null,true)
    }
    else{
        cb(new Error("Not Valid Format"))
    }
}

const Upload = multer({
    storage:Storage,
    fileFilter : FileFilters,
    limits:{
        fileSize:1024*1024*2
    }
})

router.post("/file-upload",Upload.array('file',3),FirstController.UploadFile)

module.exports = router