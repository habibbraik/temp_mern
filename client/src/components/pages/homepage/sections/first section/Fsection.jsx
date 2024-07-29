
import { useTranslation } from "react-i18next";
import '../../../../../I18next';
import Navbar from "../../../../navbar/Navbar";
import './fsection.css';
const Fsection = () => {
  const {t} = useTranslation();
  return (
    <div className="all-in-one">
      <Navbar/>
    <section className='first f-section'>
      <div className='section-first-content'>
        <div className='main-title'>
            <h1>
              L’Institut de Counseling, de Formation et de Recherches Scientifiques INCOFORS 
            </h1>
        </div>
        <div className='form-content'>
          <form className='search-form' action='' method='post'>
            <input type='text' name='search-input' placeholder={t ("search_input")} className='search-in-form'/>
            <button type='submit'>{t ("search")}</button>
          </form>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Fsection