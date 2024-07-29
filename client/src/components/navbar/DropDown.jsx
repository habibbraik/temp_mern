import { NavLink } from "react-router-dom";
import '../../index.css';

const DropDown = () => {
  return (
        <ul id="submenu">
            <li><NavLink to={'#'}>first</NavLink></li>
            <li><NavLink to={'#'}>second</NavLink></li>
            <li><NavLink to={"#"}>third</NavLink></li>
        </ul>
  )
}

export default DropDown