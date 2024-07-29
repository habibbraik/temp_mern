import facebook from '../../images/facebook (1).png';
import instagram from '../../images/instagram.png';
import linkedin from '../../images/linkedin (1).png';
import twitter from '../../images/twitter.png';
import './footer.css';
export const Footer = () => {
  return (
    <div className="footer">
        <div className="s-footer section-footer">
            <div className="section-links">
                <div className="footer-links">
                    <h4>For Business</h4>
                    <a href="#">
                        <p>Employer</p>
                    </a>
                    <a href="#">
                        <p>Wealth plane</p>
                    </a>
                    <a href="#">
                        <p>individual</p>
                    </a>
                </div>
                <div className="footer-links">
                    <h4>resource center</h4>
                    <a href="#">
                        <p>Employer</p>
                    </a>
                    <a href="#">
                        <p>Wealth plane</p>
                    </a>
                </div>
                <div className="footer-links">
                    <h4>Parteners</h4>
                    <a href="#">
                        <p>Employer</p>
                    </a>
                </div>
                <div className="footer-links">
                    <h4>company</h4>
                    <a href="#">
                        <p>About</p>
                    </a>
                    <a href="#">
                        <p>Press</p>
                    </a>
                    <a href="#">
                        <p>Career</p>
                    </a>
                    <a href="#">
                        <p>Contact</p>
                    </a>
                </div>
                <div className="footer-links">
                    <h4>Coming soon</h4>
                    <div className="socialmedia">
                        <p><img src={facebook} alt=""/></p>
                        <p><img src={instagram} alt=""/></p>
                        <p><img src={twitter} alt=""/></p>
                        <p><img src={linkedin} alt=""/></p>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className='footer-below'>
                <div className='footer-copyright'>
                    <p>
                        @{new Date().getFullYear()} codeInn. All right reserved.
                    </p>
                </div>
                {/* <div className='footer-below-links'>
                    <a href="#"><div><p>Termes & Conditions</p></div></a>
                    <a href="#"><div><p>Privacy</p></div></a>
                    <a href="#"><div><p>Security</p></div></a>
                    <a href="#"><div><p>Cookie Declaration</p></div></a>
                </div> */}
            </div>
        </div>
    </div>
  )
}
export default Footer;