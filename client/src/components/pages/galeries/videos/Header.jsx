import "../../formations page/header/headerfor.css";
import './video.css';

const Header = ({ filterItems, activeCategory }) => { // Destructure props to get activeCategory
  return (
    <header className='header-formation'>
      <div className='subtitle-formations'>
        <h1>Videos</h1>
      </div>
      <div className="header-picture">
        <div className="buttons-pic">
          <button 
            onClick={() => filterItems('training')} 
            className={`btn-picture-category same-btn-p ${activeCategory === 'training' ? 'actived-btn' : ''}`}
          >
            training
          </button>
          <button 
            onClick={() => filterItems('Show All')} 
            className={`btn-picture-category diferente-btn-p ${activeCategory === 'Show All' ? 'actived-btn' : ''}`}
          >
            tout
          </button>
          <button 
            onClick={() => filterItems('training-room')} 
            className={`btn-picture-category same-btn-p ${activeCategory === 'training-room' ? 'actived-btn' : ''}`}
          >
            our training room
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
