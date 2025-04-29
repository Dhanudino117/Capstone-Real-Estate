import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import loginImg from "../assets/house.jpg";
import signupImg from "../assets/SignIn.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"; // <-- added axios import

const AuthPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const backendURL = "http://localhost:5000"; // your backend URL here

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin
      ? `${backendURL}/api/auth/login`
      : `${backendURL}/api/auth/signup`;

    const body = isLogin
      ? { email: formData.email, password: formData.password }
      : {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        };

    setIsLoading(true);
    try {
      const res = await axios.post(endpoint, body, {
        headers: { "Content-Type": "application/json" },
      });

      setIsLoading(false);

      const data = res.data; 
      if (isLogin) {
        if (data.token) {
          localStorage.setItem("token", data.token);
          toast.success("Login successful! Redirecting...");
          setTimeout(() => navigate("/home"), 1500);
        } else {
          throw new Error("Login failed: No token received.");
        }
      } else {
        toast.success("Signup successful! Please login.");
        setIsLogin(true);
        setFormData({
          username: "",
          email: "",
          password: "",
        });
      }
    } catch (err) {
      setIsLoading(false);
      const msg = err.response?.data?.message || err.message;

      if (msg.toLowerCase().includes("email is required")) {
        toast.error("Email is required.");
      } else if (msg.toLowerCase().includes("invalid credentials")) {
        toast.error("Invalid credentials or user does not exist.");
      } else {
        toast.error(msg);
      }
    }
  };

  const handleSocialLogin = (provider) => {
    toast.info(`Login with ${provider} clicked! Implement OAuth flow.`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <ToastContainer position="top-center" />
      <div className="w-[90%] max-w-5xl flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="hidden md:block md:w-1/2">
          <img
            src={isLogin ? loginImg : signupImg}
            alt={isLogin ? "Login Image" : "Signup Image"}
            className="object-cover w-full h-full rounded-2xl"
          />
        </div>

        <div className="md:w-1/2 w-full flex items-center justify-center p-10">
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
            <h2 className="text-center text-2xl font-bold">
              {isLogin ? "LOGIN" : "SIGN UP"}
            </h2>

            {!isLogin && (
              <div className="bg-gray-100 rounded-lg flex items-center px-4 py-3">
                <FaUser className="mr-3 text-gray-500" />
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="bg-transparent focus:outline-none w-full"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            <div className="bg-gray-100 rounded-lg flex items-center px-4 py-3">
              <MdEmail className="mr-3 text-gray-500" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="bg-transparent focus:outline-none w-full"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="bg-gray-100 rounded-lg flex items-center px-4 py-3">
              <FaLock className="mr-3 text-gray-500" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="bg-transparent focus:outline-none w-full"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              disabled={isLoading}
            >
              {isLoading
                ? isLogin
                  ? "Logging in..."
                  : "Signing up..."
                : isLogin
                ? "Login Now"
                : "Sign Up"}
            </button>

            <div className="text-center text-gray-500">
              <strong className="text-black">
                {isLogin ? "Login" : "Signup"}
              </strong>{" "}
              with Others
            </div>

            <button
              type="button"
              onClick={() => handleSocialLogin("Google")}
              className="w-full flex items-center justify-center gap-2 border border-gray-200 py-3 rounded-lg hover:bg-gray-100 transition duration-300"
            >
              <FcGoogle size={22} /> Login with <strong>Google</strong>
            </button>

            <button
              type="button"
              onClick={() => handleSocialLogin("Facebook")}
              className="w-full flex items-center justify-center gap-2 border border-gray-200 py-3 rounded-lg hover:bg-gray-100 transition duration-300"
            >
              <FaFacebook size={22} className="text-blue-600" /> Login with{" "}
              <strong>Facebook</strong>
            </button>

            <p className="text-gray-600 text-sm text-center">
              {isLogin ? (
                <>
                  Don't have an account?{" "}
                  <span
                    className="text-blue-600 hover:underline cursor-pointer"
                    onClick={() => setIsLogin(false)}
                  >
                    Signup
                  </span>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <span
                    className="text-blue-600 hover:underline cursor-pointer"
                    onClick={() => setIsLogin(true)}
                  >
                    Login
                  </span>
                </>
              )}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
