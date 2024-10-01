import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import img from "../assets/register-img.png";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [registerError, setRegisterError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const photo = e.target.photoURL.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirm_password.value;

    setRegisterError("");

    if (password.length < 6) {
      setRegisterError("Your password must be 6 characters");
      return;
    } else if (!/^(?=.*[A-Z])(?=.*\d).+$/.test(password)) {
      setRegisterError(
        "Password must be contain at least one uppercase letter and one number."
      );
      return;
    } else if (password != confirmPassword) {
      setRegisterError("Passwords didn't match.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        updateUserProfile(username, photo).then(() => {});
        console.log(result.user);
        toast("Successfully Register!");
      })
      .catch((error) => {
        console.error(error.message);
        setRegisterError(error.message.split("/")[1].replace(")", ""));
      });
  };

  return (
    <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2">
      <div className="ml-2 lg:ml-0">
        <h1 className="roboto text-3xl font-semibold mt-10">
          Join Us at Star Line Land Hospitality – Your Journey Begins Here!
        </h1>
        <p className="text-base text-[#949494] my-4">
          Register now and unlock exclusive offers at Star Line Land
          Hospitality. Enjoy luxurious amenities, personalized services, and
          unforgettable experiences tailored to your needs. Start your adventure
          with us today!
        </p>
        <img className="w-full" src={img} alt="" />
      </div>
      <div>
        <div className="w-full max-w-md mx-auto p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
          <h1 className="text-2xl font-bold text-center">Register</h1>
          <form
            onSubmit={handleRegister}
            noValidate=""
            action=""
            className="space-y-6"
          >
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block dark:text-gray-600">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                required
                className="w-full px-4 py-3 rounded-md border dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block dark:text-gray-600">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
                className="w-full px-4 py-3 rounded-md border dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block dark:text-gray-600">
                Photo URL
              </label>
              <input
                type="photo"
                name="photoURL"
                id="photoURL"
                placeholder="PhotoURL"
                required
                className="w-full px-4 py-3 rounded-md border dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block dark:text-gray-600">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Password"
                  required
                  className="w-full px-4 py-3 rounded-md border dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-4"
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block dark:text-gray-600">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirm_password"
                  id="confirm_password"
                  placeholder="Confirm password"
                  required
                  className="w-full px-4 py-3 rounded-md border dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                />
              </div>
            </div>
            <button className="block w-full p-3 text-center text-white bg-red-500 hover:bg-gray-800 rounded-sm dark:text-gray-50 dark:bg-violet-600">
              Sign in
            </button>
            <ToastContainer />
          </form>
          {registerError && <p className="text-red-700">{registerError}</p>}
          <p className="text-center sm:px-6 dark:text-gray-600">
            Alredy have an account?{" "}
            <Link
              to={"/login"}
              rel="noopener noreferrer"
              href="#"
              className="link hover:text-red-500 text-gray-800 font-semibold dark:text-gray-800"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
