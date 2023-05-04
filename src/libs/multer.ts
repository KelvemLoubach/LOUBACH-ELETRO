import multer from 'multer';

export const upload = multer({
    storage:multer.memoryStorage()
});


// const tmpFolder = path.resolve(__dirname, '..','..','uploads' );

// export default {
//     directory: tmpFolder,
//     storage: Multer.diskStorage({
//         destination:tmpFolder,
//         filename(req, file, cb){
//             const filehash = crypto.randomBytes(10).toString('hex');
//             const filename = `${filehash}-${file.originalname}`;

//             return cb(null, filename)
//         }
//     })
// }






