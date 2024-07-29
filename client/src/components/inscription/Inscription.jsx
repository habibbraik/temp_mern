import { FaChevronLeft } from "react-icons/fa";
import { IoMdImages } from "react-icons/io";
import { NavLink } from "react-router-dom";
import image from '../../images/sec1.jpg';
import "./ins.css";

const Inscription = () => {
  return (
    <div className='ins-body'>
        <span className="return-to-home"><NavLink to={'/'}> <FaChevronLeft/> </NavLink></span>
        <div className='ins-content-body'>
            <div className='content-img-ins'>
                <img className='img-ins' src={image} alt=""/>
            </div>
            <div className='form-content-ins'>
                <div className='content-content-form'>
                    <div className='greeting-inscription'>
                        <h1>welcome to INCOFORS</h1>
                        <p>Nous offrons une gamme de solutions technologiques, y compris des services de conseil, de formation</p>
                    </div>
                    <div >
                        <form className='form-inscription' action="" method='post'>
                            <div className='two-input'>
                                <div className='input-content'>
                                    <label className='label-ins'>Nom</label><br/>
                                    <input type='text' name='username' />
                                </div>
                                <div className='input-content'>
                                    <label className='label-ins'>Prénom</label><br/>
                                    <input type='text' name='lastname' />
                                </div>
                            </div>
                            <div className='two-input'>
                                <div className='input-content'>
                                    <label className='label-ins'>Pays</label><br/>
                                    <input type='text' name='country' />
                                </div>
                                <div className='input-content'>
                                    <label className='label-ins'>Ville</label><br/>
                                    <input type='text' name='city' />
                                </div>
                            </div>
                            <div className='input-content tall'>
                                <label className='label-ins'>Niveau d'étude</label><br/>
                                <input type="text" name='level' />
                            </div>
                            <div className='input-content tall'>
                                <label className='label-ins'>Spécialité</label><br/>
                                <input type="text" name='level' />
                            </div>
                            <div className='input-content tall'>
                                <label className='label-ins'>Profession</label><br/>
                                <input type="text" name='level' />
                            </div>
                            <div className="card-content">
                                <p>national carte</p>
                                <div className="images-card">
                                    <div className="same-card">
                                        <label className="label-card-nat" htmlFor="card-nat">
                                            <div>
                                                <IoMdImages/>
                                                <p id="color-p">image 1</p>
                                            </div>
                                        </label>
                                        <input type="file" name='card1' className='image-card' id='card-nat' />
                                    </div>
                                    <div className="same-card">
                                        <label className="label-card-nat" htmlFor="card-nat2">
                                            <div>
                                                <IoMdImages/>
                                                <p id="color-p">image 2</p>
                                            </div>
                                        </label>
                                        <input type='file' name='card2' className="image-card" id="card-nat2" />
                                    </div>
                                </div>
                            </div>
                            <div className="submit-btn-ins">
                                <button type='submit'>Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Inscription;
