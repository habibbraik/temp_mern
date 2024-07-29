import { IoMdImages } from "react-icons/io";
import { MdVideoCameraBack } from "react-icons/md";
import './add.css';
import { Form, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../../../utils/customFetch";

const Add = () => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";

    const handleUploadImage = async (e) => {
        const file = e.target.files[0];
        if (file && file.size > 500000) {
            toast.error('Image size too large');
            return;
        }

        const formData = new FormData();
        formData.append('image', file);

        try {
            const { data } = await customFetch.post('/videos/uploadImage', formData);
            toast.success("Image uploaded successfully");
            console.log(data.image);
        } catch (error) {
            toast.error(error?.response?.data?.msg || 'Something went wrong');
        }
    };

    const handleUploadVideo = async (e) => {
        const file = e.target.files[0];
        if (!file) {
            toast.error('No video file selected');
            return;
        }

        const formData = new FormData();
        formData.append('video', file);

        try {
            const { data } = await customFetch.post('/videos/uploadVideo', formData);
            toast.success("Video uploaded successfully");
            console.log(data.video);
        } catch (error) {
            toast.error(`Video upload failed: ${error?.response?.data?.msg || 'Unknown error'}`);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle additional form submission logic here
        // For example, sending description data if needed
    };



    return (
        <section className='adding-section'>
            <div className='adding-content'>
                <div className='adding-header'>
                    <h1>Add Photos - Videos</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat molestiae totam distinctio illum? Repellat
                    </p>
                </div>
                <div>
                    <Form className="form-content-inputs" encType='multipart/form-data' method='post' onSubmit={handleSubmit}>
                        <div className="input-contents">
                            <div className="desc-adding">
                                <textarea type='text' placeholder='Add Description..' name='description'></textarea>
                            </div>
                            <div className="adding-input-content">
                                <div className="addP">
                                    <label htmlFor="add-1"> 
                                        <div className="content-label-add">
                                            <span><IoMdImages /></span>
                                            <h3>Add Photo</h3>
                                        </div>
                                    </label>
                                    <input type="file" name='image' accept='image/*' id='add-1' className="input-add" onChange={handleUploadImage} style={{ display: 'none', visibility: 'hidden' }} />
                                </div>
                                <div className="addP">
                                    <label htmlFor="add-2">
                                        <div className="content-label-add">
                                            <span><MdVideoCameraBack /></span>
                                            <h3>Add Video</h3>
                                        </div>
                                    </label>
                                    <input type="file" name='video'  accept='video/*' id='add-2' className="input-add" onChange={handleUploadVideo} style={{ display: 'none', visibility: 'hidden' }} />
                                </div>
                            </div>
                            <button className="upload-pv-btn" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Send'}</button>
                        </div>
                    </Form>
                </div>
            </div>
        </section>
    );
};

export default Add;
