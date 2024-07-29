import { useState } from "react";
import { ImCross } from "react-icons/im";
import { pictures } from "../../../../data";
import Footer from "../../../footer/Footer";
import SecondNavbar from "../../../navbar/SecondNavbr";
import Header from "./Header";
import "./picture.css";

const Pictures = () => {
  const [isClose, setIsClose] = useState(true);
  const [selectedImg, setSelectedImg] = useState("");
  const [data, setData] = useState(pictures);
  const [activeCategory, setActiveCategory] = useState('Show All');

  const closePicture = () => {
    setIsClose(true);
  };

  const handleImageClick = (img) => {
    setSelectedImg(img);
    setIsClose(false);
  };

  const filterItems = (category) => {
    const updatedItems = category === 'Show All' ? pictures : pictures.filter(item => item.category === category);
    setData(updatedItems);
    setActiveCategory(category);
  };

  return (
    <div className="all-picture-page">
      {isClose && <SecondNavbar />}
      <Header filterItems={filterItems} activeCategory={activeCategory}/>
      <div className="page-main-img">
        <div className="images-str">
          {data.map((image) => { 
            const { id, img } = image;
            return (
              <div
                onClick={() => handleImageClick(img)}
                className="image"
                key={id}
              >
                <img className="img-pic-page" src={img} alt="img" />
              </div>
            );
          })}
        </div>
      </div>

      <div className={isClose ? "img-big-cover close" : "img-big-cover"}>
        <span onClick={closePicture}>
          <ImCross />
        </span>
        <img src={selectedImg} alt="large view" />
      </div>
      <Footer />
    </div>
  );
};

export default Pictures;
