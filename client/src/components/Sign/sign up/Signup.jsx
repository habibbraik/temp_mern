import { Link } from 'react-router-dom';
import './signup.css';
const Signup = () => {
  return (
    <div className="section-sign_up">
        <div className="content-sign_up">
            <h1>sign up</h1>
            <form action="/" method="post" className="input-form-sign_up">
                <div className='input-sign-up'>
                    <label htmlFor="">user name</label>
                    <input type="text" name="username" />
                </div>
                <div className='input-sign-up'>
                    <label htmlFor="">email</label>
                    <input type="email" name="email" />
                </div>
                <div className='input-sign-up'>
                    <label htmlFor="">password</label>
                    <input type="password" name="password" />
                </div>
                <div className='input-sign-up'>
                    <label htmlFor="">repeat password</label>
                    <input type="password" name="repeat-password" />
                </div>
                <button type="submit">send</button>
            </form>
            <div className='new-account-sign-in'>
                <Link to={'/sign-in'}><p>have an account before?</p></Link>
            </div>
        </div>
    </div>
  )
}

export default Signup