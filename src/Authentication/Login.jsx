import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
  const {logInUser} = useContext(AuthContext)
  const [loginError, setLoginError] = useState('')

  const handleLogin = e => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;


    setLoginError("") 

    logInUser(email, password)
    .then(result => {
      console.log(result.user)
      toast('Login successfully!')
    })
    .catch(error => {
      console.error(error)
      setLoginError('Please input a valid password.')
    })
  }
 
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" id='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='Password' id='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          {
        loginError && <p className='text-red-700 mt-4'>{loginError}</p>
      }
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
          <ToastContainer/>
        </div>
      </form>
      <p className="text-center mb-6 sm:px-6 dark:text-gray-600">
            Don't have an account?{" "}
            <Link to={'/register'}
              rel="noopener noreferrer"
              href="#"
              className="link link-primary font-semibold dark:text-gray-800"
            >
              Register
            </Link>
          </p>
    </div>
  </div>
</div>
    );
};

export default Login;