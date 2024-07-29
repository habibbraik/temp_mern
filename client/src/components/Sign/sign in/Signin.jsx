
import { Link } from 'react-router-dom';
import './signin.css';
const Signin = () => {
  return (
    <div className='section-sign_in'>
        <div className='content-sign_in'>
            <h1>Sign in</h1>
            <form action="" method='post' className='input-form-sign_in'>
                <div className='input-sign-in'>
                    <label htmlFor="">Email</label><br/>
                    <input type="email" name='email' />
                </div>
                <div className='input-sign-in'>
                    <label htmlFor="">Password</label><br/>
                    <input type="password" name='password' />
                </div>
                <div className='forget-pas'>
                    <Link to={'/'}>Forget password ?</Link>
                </div>
                <div className='submit-btn-sign-in'>
                    <button type='submit'>Send</button>
                </div>
            </form>
            <div className='new-account-sign-in'>
                <p>d'ont have an account ? <Link to={"/sign-up"}>register</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Signin