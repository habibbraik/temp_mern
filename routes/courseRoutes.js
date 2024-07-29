import express from 'express';
const router = express.Router();
import { authenticateUser, authorizePermissions } from '../middleware/authentication.js';

import {
  createCourse,
  getAllCourses,
  getSingleCourse,
  updateCourse,
  deleteAllCourses,
  deleteCourse,
  uploadImage
} from '../controllers/courseController.js';

router
  .route('/')
  .post([authenticateUser, authorizePermissions('admin')], createCourse)
  .get(getAllCourses)
  .delete(deleteAllCourses)

router
  .route('/uploadImage')
  .post([authenticateUser, authorizePermissions('admin')], uploadImage);
router
  .route('/:id')
  .get(getSingleCourse)
  .patch([authenticateUser, authorizePermissions('admin')], updateCourse)
  .delete([authenticateUser, authorizePermissions('admin')], deleteCourse)


export default router;
