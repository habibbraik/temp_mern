import React from 'react';
import Footer from "../../footer/Footer";
import SecondNavbar from "../../navbar/SecondNavbr";
import './formation.css';
import FormationAll from "./FormationAll.jsx/FormationAll";
import HeaderFor from './header/HeaderFor';

export const Formation = () => {
  return (
    <div className="formation-main-main">
      <SecondNavbar/>
      <HeaderFor/>
      {/* <Category /> */}
      <FormationAll />
      <Footer/>
    </div>
  )
}
export default Formation;