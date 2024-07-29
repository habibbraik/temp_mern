

import '../../components/Sign/sign in/signin.css';
import SubmitBtn from "../SubmitBtn";
// import { useEffect } from "react";
import { Form, Link, redirect, useActionData } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../../utils/customFetch";
import FormRow from '../FormRow';

// import { useUserContext } from "../context/userContext";
export const action=async({request})=>{
  const formData=await request.formData()
  const data=Object.fromEntries(formData)
  const errors={msg:''}
  if(data.password.length < 3){
    errors.msg='passowrd too short'
    return errors;
  }
  try {
    const response = await customFetch.post('auth/login', data);
    const { data: responseData } = response;
    const { user } = responseData;

    toast.success('Login successful');
    if (user.role === 'admin') {
      return redirect('/ajouteformation');
    } else if (user.role === 'user') {
      return redirect('/inscriptions');
    }
  } catch (error) {
    const errorMsg = error?.response?.data?.msg || 'An unexpected error occurred';
    toast.error(errorMsg);
    return error;
  }

}

const Signin = () => {

  const errors=useActionData()

  return (
    <div className='section-sign_in'>
        <div className='content-sign_in'>
            <h1>login</h1>
            <Form method='post' className='input-form-sign_in'>
                <div className='input-sign-in'>
                    <label htmlFor="">Email</label><br/>
                    <FormRow type="email" name='email' id="id" />
                </div>
                <div className='input-sign-in'>
                    <label htmlFor="">Password</label><br/>
                    <FormRow type="password" name='password' />
                </div>
                <div>
                {errors?.msg && <p style={{color:'red'}}>{errors.msg}</p>}
                </div>
                <div className='forget-pas'>
                    <Link to={'/'}>Forget password ?</Link>
                </div>
                <div className='submit-btn-sign-in'>
                  <SubmitBtn text="Login" request="login" />
                </div>
            </Form>
            <div className='new-account-sign-in'>
                <p>d'ont have an account ? <Link to={"/registers"}>register</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Signin
