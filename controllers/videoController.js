  import { v2 as cloudinary } from 'cloudinary';
  import { StatusCodes } from 'http-status-codes';
  import fs from 'fs';
    export const uploadVideo = async (req, res) => {
        try {
          // Check if file is present
          if (!req.file) {
            return res.status(400).json({ msg: 'No file uploaded' });
          }

          // Upload the file to Cloudinary
          const result = await cloudinary.uploader.upload_large(req.file.path, {
            resource_type: 'video',
          });

          // Respond with the result
          res.status(200).json({
            video: result.secure_url,
          });
        } catch (error) {
          console.error(error);
          res.status(500).json({ msg: 'Error uploading video' });
        }
    };
  export const uploadImage = async (req, res) => {
      const result = await cloudinary.uploader.upload(
        req.files.image.tempFilePath,
        {
          use_filename: true,
          folder: 'file_upload',
        }
      );
      fs.unlinkSync(req.files.image.tempFilePath);
      return res.status(StatusCodes.OK).json({ image:result.secure_url  });
    };





