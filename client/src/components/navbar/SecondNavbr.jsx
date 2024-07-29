import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaBars } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ChangLanguages from "../../ChangLanguages";
import { useGlobalContext } from '../../context';
import google from '../../images/goo.png';
import './r.css';
import './secondnav.css';
export const SecondNavbar = () => {
    const { openSidebar , nav} = useGlobalContext();
    const[isBlack , setIseBlack] = useState(true);
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
    <>
    <header className='navbarAll second-bar-header-nav'>
        <div className="navbarHome">
        <div className="logo-nav">
            <img src={google} alt='logo'/>
        </div>
            <ul className={nav ? 'links color' : 'links asecond'}>
            <li><NavLink to={'/'}>{t("accueil")}</NavLink></li>
          <li><NavLink to={'/presentation'}>{t("Presentation")}</NavLink></li>
          <li className="dropdown secnavdr">
            <NavLink 
              to={'/formations'} 
              className="navlink-with-icon"
            >
                {t("formation")}
              <IoIosArrowDown className="iconTN"/>
            </NavLink>
            <div className="dropdown-content">
              <NavLink to={'/formations/élève'}>{t("course1")}</NavLink>
              <NavLink to={'/formations/étudient'}>{t("course2")}</NavLink>
              <NavLink to={'/formations/professionnel'}>{t("course3")}</NavLink>
              <NavLink to={'/formations/doctorat'}>{t("course4")}</NavLink>
            </div>
          </li>
          <li><NavLink to={'/contact'}>{t("contact")}</NavLink></li>
          <li className="dropdown secnavdr"><NavLink className="navlink-with-icon">{t("galerie")}<IoIosArrowDown className="iconTN"/></NavLink>
            <div className="dropdown-content-galeries">
              <NavLink to={'/pictures'}>{t("photo")}</NavLink>
              <NavLink to={'/videos'}>{t("video")}</NavLink>
            </div>
          </li>
          <li><ChangLanguages isBlack={isBlack}/></li>
            </ul>
            <div>
          <motion.button className='contact-nav'
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 1.1 }}
          >
            <NavLink to={'/login'}><span className='button-content'>{t("inscription")}</span></NavLink>
          </motion.button>
        </div>
        <div> 
        <motion.button className='log-out-nav' whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }}> 
          <span className='log-out--btn-in'><Link onClick={logoutUser} >{t("logout")}</Link></span> 
        </motion.button> 
      </div>
        </div>
        <div>
            <button onClick={openSidebar} className='sidebar-toggle'>
                <FaBars/>
            </button>
        </div>
        </header>
<Outlet/>
    </>
  )
}
export default SecondNavbar;