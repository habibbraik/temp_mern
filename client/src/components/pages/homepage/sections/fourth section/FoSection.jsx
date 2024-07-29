import { useState,useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import customFetch from '../../../../../utils/customFetch';
import { NavLink } from 'react-router-dom';
import { array } from '../../../../../data';
import '../../../../../I18next';
import './fourthSection.css';

const FoSection = () => {
    const { t } = useTranslation();
    const [readMoreState, setReadMoreState] = useState({});
    const [data, setData] = useState(null);

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
if(!data){
    return <div>loading...</div>
}
    const toggleReadMore = (id) => {
        setReadMoreState((prevState) => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };
    const floor = Math.floor(Math.random() * 10);
    // Limit the number of cards to display to 3
    const limitedArray = data.slice(floor,floor+3);

    return (
        <section className='fourth-section-home'>
            <div className='content-section-four'>
                <div className='header-content-section-four'>
                    <div className='section-four-title'>
                        <h2>{t('tit4')}</h2>
                    </div>
                    <div className='section-four-link'>
                        <h4>
                            <NavLink to={'/formations'}>{t('tout')}</NavLink>
                        </h4>
                    </div>
                </div>
                <div className='cards-formation-section-four'>
                    {limitedArray.map((item) => {
                        const { _id, level, price, image, name, category } = item;
                        const isReadMore = readMoreState[_id];
                        return (
                            <div className='card-formation-four' key={_id}>
                                <div className='card-demi-formation-img-first-part'>
                                    <img src={image} alt={name} />
                                </div>
                                <div className='inf-card-formation-section-four'>
                                    <p className='category-section-four'>{category}</p>
                                    <h3>
                                        {isReadMore || name.length <= 21 ? (
                                            name
                                        ) : (
                                            `${name.substring(0, 18)}..`
                                        )}
                                    </h3>
                                    {name.length > 21 ? (
                                        <button
                                            style={{
                                                border: "none",
                                                fontSize: "12px",
                                                cursor: "pointer",
                                                background: 'transparent',
                                                textAlign: 'start',
                                                color: 'rgba(75, 52, 195, 1)',
                                                fontWeight: '700',
                                                marginLeft: "10px"
                                            }}
                                            className='info-btn'
                                            onClick={() => toggleReadMore(_id)}
                                        >
                                            {isReadMore ? 'Lire moins' : 'Lire plus'}
                                        </button>
                                    ) : (
                                        <button
                                            style={{
                                                visibility: 'hidden',
                                                border: "none",
                                                fontSize: "12px",
                                                cursor: "pointer",
                                                background: 'transparent',
                                                textAlign: 'start',
                                                color: 'rgba(75, 52, 195, 1)',
                                                fontWeight: '700',
                                                marginLeft: "10px"
                                            }}
                                            className='info-btn'
                                            onClick={() => toggleReadMore(_id)}
                                        >
                                            {isReadMore ? 'Lire moins' : 'Lire plus'}
                                        </button>
                                    )}
                                    <p className='number-ins-section-four'>{level}</p>
                                    <div className='bottom-card-section-four'>
                                        <h4>{price}DA</h4>
                                        <button>
                                            <NavLink to={`/formation/course/${_id}`}>view</NavLink>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default FoSection;
