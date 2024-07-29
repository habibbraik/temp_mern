import { IoCloseSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from '../../context';
import google from '../../images/goo.png';
import { links, social } from './data';


const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className='sidebar-header'>
        <img src={google} alt='coding addict' className='logo' />
        <button className='close-btn' onClick={closeSidebar}>
          <IoCloseSharp/>
        </button>
      </div>
      <ul className='links'>
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <NavLink to={url}>
                {icon}
                {text}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <ul className='social-links'>
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
export default Sidebar;