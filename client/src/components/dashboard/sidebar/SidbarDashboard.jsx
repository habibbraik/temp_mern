import { NavLink, useLocation } from 'react-router-dom';
import admin from '../../../images/admin.svg';
import pic from '../../../images/imageadd.svg';
import save from '../../../images/save.svg';
import image from '../../../images/static.svg';
import customFetch from '../../../utils/customFetch';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './sideBar.css';
import { useNavigate } from 'react-router-dom';
const SidbarDashboard = () => {
    const navigate = useNavigate();
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
    const location = useLocation();

    return (
        <div className='mainSidebarContainer'>
            <div className='content-sidebare'>
                <div className='AdminTitle'>
                    <img src={admin} alt="" className='sidebarIconsAdmin' />
                    <h4>Admin</h4>
                </div>
                <ul className='ulContainer'>
                    <li className={location.pathname === '/statistique' ? 'clickedli' : 'liContainer'}>
                        <img src={image} alt='' className='sidebarIconsDas' />
                        <NavLink to={'/statistique'} className={location.pathname === '/statistique' ? 'clickedLink' : 'ItemsNames'}>Statistiques</NavLink>
                    </li>
                    <li className={location.pathname === '/inscription' ? 'clickedli' : 'liContainer'}>
                        <img src={save} alt='' className='sidebarIconsDas' />
                        <NavLink to={'/inscription'} className={location.pathname === '/inscription' ? 'clickedLink' : 'ItemsNames'}>Inscriptions</NavLink>
                    </li>
                    <li className={location.pathname === '/photo-video' ? 'clickedli' : 'liContainer'}>
                        <img src={pic} alt='' className='sidebarIconsDas' />
                        <NavLink to={'/photo-video'} className={location.pathname === '/photo-video' ? 'clickedLink' : 'ItemsNames'}>Photos videos</NavLink>
                    </li>
                    <li className={location.pathname === '/ajouteformation' ? 'clickedli' : 'liContainer'}>
                        <img src='' alt='' className='sidebarIconsDas' />
                        <NavLink to={'/ajouteformation'} className={location.pathname === '/ajouteformation' ? 'clickedLink' : 'ItemsNames'}>Formation</NavLink>
                    </li>
                    <Link onClick={logoutUser}  className={location.pathname === '/logout' ? 'clickedli' : 'liContainer'}>
                        <img src='' alt='' className='sidebarIconsDas' />
                        <NavLink   className={location.pathname === '/logout' ? 'clickedLink' : 'ItemsNames'}>Logout</NavLink>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default SidbarDashboard;
