import { useTranslation } from 'react-i18next';
import { advantages } from "../../../../../data";
import '../../../../../I18next';
import './thirdSection.css';
const ThirdSection = () => {
    const {t} = useTranslation();
  return (
    <section className="third-section-home">
        <div className="content-third-section">
            <h2>{t("pn")}</h2>
            <div className="advantages-all">
                    {advantages.map((item) => {
                        const {id , image , text} = item;
                        return(
                            <div className="adv-each" key={id}>
                                <div className="img-cadre-adv">
                                    <img src={image} />
                                </div>
                                <p>{text}</p>
                            </div>
                        )
                    })}
            </div>
        </div>
    </section>
  )
}

export default ThirdSection