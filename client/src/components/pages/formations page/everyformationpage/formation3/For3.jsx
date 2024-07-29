import React from 'react';
import Footer from "../../../../footer/Footer";
import SecondNavbar from "../../../../navbar/SecondNavbr";
import '../../formation.css';
import Formationseul from "./Formationseul";
import Header from './Header';

export const Formation = () => {
  return (
    <div className="formation-main-main">
      <SecondNavbar/>
      <Header/>
      <Formationseul />
      <Footer/>
    </div>
  )
}
export default Formation;