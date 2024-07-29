import { useState } from "react";
import { ImCross } from "react-icons/im";
import { videos } from "../../../../data"; // Import the videos array
import Footer from "../../../footer/Footer";
import SecondNavbar from "../../../navbar/SecondNavbr";
import Header from "./Header";
import "./video.css";

const Videos = () => {
  const [isClose, setIsClose] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [data, setData] = useState(videos);
  const [activeCategory, setActiveCategory] = useState('Show All');

  const closeVideo = () => {
    setIsClose(true);
  };

  const handleVideoClick = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setIsClose(false);
  };

  const filterItems = (category) => {
    const updatedItems = category === 'Show All' ? videos : videos.filter(item => item.category === category);
    setData(updatedItems);
    setActiveCategory(category);
  };

  return (
    <div className="all-video-page">
      {isClose && <SecondNavbar />}
      <Header filterItems={filterItems} activeCategory={activeCategory} />
      <div className="page-main-video">
        <div className="videos-str">
          {data.map((video) => {
            const { id, thumbnail, video: videoUrl } = video;
            return (
              <div
                onClick={() => handleVideoClick(videoUrl)}
                className="video"
                key={id}
              >
                <img className="img-video-page" src={thumbnail} alt="video thumbnail" />
              </div>
            );
          })}
        </div>
      </div>

      <div className={isClose ? "video-big-cover close" : "video-big-cover"}>
        <span onClick={closeVideo}>
          <ImCross />
        </span>
        <video width="320" height="240" controls>
          <videos src='./donut.mp4' type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Footer />
    </div>
  );
};

export default Videos;
