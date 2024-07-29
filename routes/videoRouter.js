import express from 'express';
import fileUpload from 'express-fileupload';
import { uploadImage, uploadVideo} from '../controllers/videoController.js';
import upload from '../middleware/multerMiddleware.js';
const router = express.Router();
const fileUploadMiddleware = fileUpload({ useTempFiles: true });

router.route('/uploadVideo').post(upload.single('video'),uploadVideo)
router.route('/uploadImage').post(fileUploadMiddleware,uploadImage)



export default router;
