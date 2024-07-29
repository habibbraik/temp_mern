import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebare';
const Homelayout = () => {
  return (
    <header>
    
    <Navbar/>
    <Sidebar/>
    <Outlet/>
    </header>
  )
}

export default Homelayout