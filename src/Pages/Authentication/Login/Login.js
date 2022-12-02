import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HashLoader } from "react-spinners";
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../../Hooks/useTitle';
import './Login.css';

const Login = () => {
  useTitle("Login")
  const [loading, setLoading] = useState(false);

  const { login, googleProvider } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true)
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoading(false)

        const currentUser = {
          email: user?.email
        }

        fetch("https://capture-pro-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(currentUser)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)

            // JSON Token Save Local Storage.........
            localStorage.setItem("attorney-token", data.token);
            navigate(from, { replace: true });
          })
        toast.success("You Successfully Login !!");
        form.reset();
      })
      .catch((e) => console.error(e));
  };

  const handleGoogleLogin = () => {
    googleProvider()
      .then(result => {
        const user = result.user;
        console.log(user)
        const currentUser = {
          email: user?.email,
        };

        fetch("https://capture-pro-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            // JSON Token Save Local Storage.........
            localStorage.setItem("attorney-token", data.token);
            // navigate(from, { replace: true });
          });
        toast.success("You Successfully Login !!");
      })
      .catch(e => console.error(e))
  }

  return (
    <div>
      {loading ? (
        <HashLoader className="m-auto" color="#36d7b7" />
      ) : (
        <div>
         
          <button
            onClick={handleGoogleLogin}
            className="flex items-center btn-google"
          >
            <FcGoogle className="text-2xl ml-1 mr-10"></FcGoogle>
            <span className="ml-10">Continue With Google</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;