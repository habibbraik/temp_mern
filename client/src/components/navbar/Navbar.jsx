import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaBars } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ChangLanguages from "../../ChangLanguages";
import { useGlobalContext } from '../../context';
import '../../I18next';
import google from '../../images/goo.png';
import '../../index.css';
import customFetch from "../../utils/customFetch";
import './r.css';

export const Navbar = () => {
  const { openSidebar, nav } = useGlobalContext();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const logoutUser = async () => {
    try {
      await customFetch.get('/auth/logout')
    //   clearUser()
      toast.success('logout successfully');
      return navigate('/login')
    } catch (error) {
      toast.error(error?.response?.data?.msg)
      return error
    }
  }
  return (
    <header className={nav ? 'navbarAll scrolled' : 'navbarAll first-header-nav'}>
    <div className="navbarHome">
      <div className="logo-nav">
        <img src={google} alt='logo'/>
      </div>
      <ul className={nav ? 'links color' : 'links firstN'}>
        <li><NavLink to={'/'}>{t("accueil")}</NavLink></li>
        <li><NavLink to={'/presentation'}>{t("Presentation")}</NavLink></li>
        <li className="dropdown">
          <NavLink 
            to={'/formations'} 
            className="navlink-with-icon"
          >
              {t("formation")}
            <IoIosArrowDown className="iconT"/>
          </NavLink>
          <div className="dropdown-content">
            <NavLink to={'/formations/élève'}>{t("course1")}</NavLink>
            <NavLink to={'/formations/étudient'}>{t("course2")}</NavLink>
            <NavLink to={'/formations/professionnel'}>{t("course3")}</NavLink>
            <NavLink to={'/formations/doctorat'}>{t("course4")}</NavLink>
          </div>
        </li>
        <li><NavLink to={'/contact'}>{t("contact")}</NavLink></li>
        <li className="dropdown"><NavLink className="navlink-with-icon">{t("galerie")}<IoIosArrowDown className="iconTN"/></NavLink>
            <div className="dropdown-content-galeries">
              <NavLink to={'/pictures'}>{t("photo")}</NavLink>
              <NavLink to={'/videos'}>{t("video")}</NavLink>
            </div>
          </li>
        <li><ChangLanguages/></li>
      </ul>
      <div>
        <motion.button className='contact-nav'
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 1.1 }}
        >
          <span className='button-content'><NavLink to={'/login'}>{t("inscription")}</NavLink></span>
        </motion.button>
      </div>
      <div> 
        <motion.button className='log-out-nav' whileHover={{ scale: 0.9 }} whileTap={{ scale: 1.1 }}> 
          <span className={nav? 'log-out--btn-in' : 'log-out-btn'}><Link onClick={logoutUser} >{t("logout")}</Link></span> 
        </motion.button> 
      </div>
    </div>
    <div>
      <button onClick={openSidebar} className='sidebar-toggle'>
        <FaBars/>
      </button>
    </div>
  </header>
  );
}

export default Navbar;
