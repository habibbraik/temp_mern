import React, { useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { category, course } from "../../../../data";
import './category.css';

const Category = () => {
    const isSliderActive = category.length > 7;
  const tabsRef = useRef(null);
  const [data , setData] = useState(course);
  const handlePrevClick = () => {
    if (tabsRef.current) {
      tabsRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const handleNextClick = () => {
    if (tabsRef.current) {
      tabsRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };
  const filterItems = (cartItem) =>{
    const updateItem = data.filter((curItem)=>{
      return curItem.category === cartItem
    });
    setData(updateItem);
  }

  return (
    <section className="category-section">
      <div className="wrapper">
        <div className={isSliderActive? "icon left-icon" : "hide-icon"} onClick={handlePrevClick}>
          <IoIosArrowBack />
        </div>
        <ul className="tabs-box" ref={tabsRef}>
          {category.map((item) => {
            return (
                    <li key={item.id} className="tab">
                      <button type='submit' onClick={()=>filterItems(item.category)}>{item.category}</button>
                    </li>
            );
          })}
          <button style={{cursor:"pointer"}} onClick={()=>setData(course)}>Show All</button>
        </ul>
        <div className={isSliderActive? "icon right-icon" : "hide-icon"} onClick={handleNextClick}>
          <IoIosArrowForward />
        </div>
      </div>
    </section>
  );
};

export default Category;