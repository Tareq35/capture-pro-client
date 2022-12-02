import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HashLoader } from "react-spinners";
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../../Hooks/useTitle';
import './Register.css';

const Register = () => {
  const [loading, setLoading] = useState(false);

  const { register, profileUpdate } = useContext(AuthContext);
  useTitle("Register")

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = event => {
    event.preventDefault();
    setLoading(true)
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    register(email, password)
      .then(result => {
        const user = result.user;
        setLoading(false)
        console.log(user)
        handleProfileUpdate(name, photoURL);

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
            navigate(from, { replace: true });
          });
        toast.success("You SuccessFully Register !!");
        form.reset();
      })
      .catch(e => console.error(e))
  }

  const handleProfileUpdate = (name, photoURL) => {
    const profile = { displayName: name, photoURL: photoURL }
    profileUpdate(profile)
  }

  return (
    <div>
      {loading ? (
        <HashLoader className="m-auto" color="#36d7b7" />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <p className="text-xl font-bold font-sans">
              Register
            </p>
            <input
              type="text"
              name="name"
              id=""
              placeholder="Full Name"
              required
            />{" "}
            <br />
            <input
              type="text"
              name="photoURL"
              id=""
              placeholder="Photo URL"
              required
            />
            <br />
            <input
              type="email"
              name="email"
              id=""
              placeholder="Your Email"
              required
            />
            <br />
            <input
              type="password"
              name="password"
              id=""
              placeholder="Password"
              required
            />
            <br />
            <button
              className="btn btn-ghost w-full bg-[#a19f98] font-semibold my-4 border-0"
              type="submit"
            >
              REGISTRATION
            </button>
            <p>
              Already have an account? please{" "}
              <Link className="text-[tomato] underline" to="/login">
                Login
              </Link>
            </p>
          </div>
        </form>
      )}
    </div>
  );
};

export default Register;