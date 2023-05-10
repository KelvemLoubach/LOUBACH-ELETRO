"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
exports.upload = (0, multer_1.default)({
    storage: multer_1.default.memoryStorage()
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
