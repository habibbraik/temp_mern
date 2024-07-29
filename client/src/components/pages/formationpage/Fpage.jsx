    import { useEffect, useState } from 'react';
    import { useParams } from 'react-router-dom';
    import customFetch from '../../../utils/customFetch.js';
    import Footer from '../../footer/Footer.jsx';
    import Navbar from '../../navbar/SecondNavbr.jsx';
    import { NavLink } from 'react-router-dom';
    import { useNavigate } from 'react-router-dom';
    import './pageformation.css';
    import { toast } from 'react-toastify';

    const Fpage = () => {
        const { id } = useParams();
        const [courseData, setCourseData] = useState(null);
        const [data, setData] = useState(null);
        const navigate = useNavigate();
        useEffect(() => {
            async function fetchData() {
                try {
                    const response = await customFetch('/courses');
                    setData(response.data.courses);
                } catch (error) {
                    console.error(error);
                    setData([]);
                }
            }

            fetchData();
        }, []);

        useEffect(() => {
            if (data) {
                const course = data.find((item) => item._id === id);
                setCourseData(course);
            }
        }, [data, id]);

        if (!courseData) {
            return <div style={{ height: '100vh' }}>Loading...</div>;
        }


        const { name, category, price, level, image, description, schedule } = courseData;
        const handelSubmit = async (e) => {
            e.preventDefault();
            try {
                const { data: { checkout } } = await customFetch.post('/checkout', { amount: price });
                window.location.href = checkout.checkout_url; // Redirect to the external URL
            } catch (error) {
                toast.error(error?.response?.data?.msg);
                return error;
            }
        };
        return (
            <>
                <Navbar />
                <section className='main-section-solo'>
                    <div className='content-solo-page'>
                        <div className='img-for'>
                            <img src={image} alt={name} />
                            <div className='title-formation-first'>
                                <h1>{name}</h1>
                            </div>
                        </div>
                        <div className='main-section-solo-content'>
                            <div className='formation-sts'>
                                <div className='formation-info'>
                                    <h2>{name}</h2>
                                    <h3>Niveau: <span>{level}</span></h3>
                                    <h3>Catégorie: <span>{category}</span></h3>
                                    <p className='price-con'>Price: <span>{price} DA</span></p>
                                </div>
                                <div className='formation-desc'>
                                    <h2>Description</h2>
                                    <p>{description}</p>
                                </div>
                            </div>
                            <div className='planning'>
                                <h2>Plan de formation</h2>
                                <div className='planning-date-time'>
                                    <div className='planning-date'>
                                        <h3>Day</h3>
                                        {schedule.map((item, index) => (
                                            <p id='day-time-single' key={index}>{item.day}</p>
                                        ))}
                                    </div>
                                    <div className='planning-time'>
                                        <h3>Time</h3>
                                        {schedule.map((item, index) => (
                                            <p id='day-time-single' key={index}>{item.startTime} - {item.endTime}</p>
                                        ))}
                                    </div>
                                </div>

                            </div>
    <div className='content-section-two' style={{display:'flex',justifyContent:"end",padding:'30px'}}>   <NavLink to={'/inscriptions'} ><button type='submit' onClick={handelSubmit} style={{padding:'15px',paddingLeft:'30px',paddingRight:'30px',borderRadius:'10px',textAlign:'center'}}>Inscrie</button></NavLink></div>
                        </div>

                    </div>
                </section>
                <Footer />
            </>
        );
    };

    export default Fpage;
