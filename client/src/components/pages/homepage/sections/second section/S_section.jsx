import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import '../../../../../I18next';
import image from '../../../../../images/sect2.png';
import './S-section.css';
const S_section = () => {
  const {t} = useTranslation();
  return (
    <section className='section-two'>
        <div className='main-second-section'>
            <div className='img-section-two'>
                <img style={{height:"500px" , width:"500px"}} src={image} alt=""/>
            </div>
            <div className='content-section-two'>
                <h2>incofors</h2>
                <p>
                  {t('s2content')}
                </p>
                <NavLink to={'/formations'} ><button>More </button></NavLink>
            </div>
        </div>
    </section>
  )
}

export default S_section