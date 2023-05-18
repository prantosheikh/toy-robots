import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import login from "../../assets/images/login.jpg";
import { AuthContext } from "../../provider/AuthProvider";
const SignUp = () => {
  const {createUser} = useContext(AuthContext)
  const [error, setError] = useState('')
  const [success, setSuccess ] = useState('')
  const handlerSignUp = (event) => {
    event.preventDefault();
    setError('')
    setSuccess('')
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password, name, photo);
     if (!/(?=.*[A-Z])/.test(password)) {
       return setError("Should contain at least one upper case");
     } else if (!/^.{6}$/.test(password)) {
       return setError("Password must be exactly 6 characters.");
     }
    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        handleUserupdateProfile(user, name, photo)
        setSuccess('Congratulations! Your login was successful. Welcome to your account!')
      })
      .catch(error => {
        console.log(error.message);
        setError(error.message)
    })
  };


  const handleUserupdateProfile = (user, name, photo) => {
    updateProfile(user, {
      displayName: name, 
      photoURL: photo
    })
      .then(result => {
      console.log(result);
      })
      .catch(error => {
      console.log(error.message);
    })
  };

 


  return (
    <div className="hero border-spacing-0 w-full my-11">
      <div className="hero-content flex-col lg:flex-row-reverse md:gap-7">
        <div className="text-center lg:text-left lg:w-1/2">
          <img src={login} alt="" />
        </div>
        <div className="card flex-shrink-0 shadow-2xl bg-base-100 lg:w-2/5">
          <form onSubmit={handlerSignUp}>
            <div className="card-body">
              <h4 className="text-4xl text-center font-bold">SignUp </h4>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  name="photo"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  required
                  className="input input-bordered"
                />
                <label className="label">
                  <p className="text-red-600">{error}</p>
                  <p className="text-green-600">{ success}</p>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary mb-3"
                  type="submit"
                  value="SignUp"
                />
                <p className="text-center">
                  {" "}
                  Already Have an Account{" "}
                  <Link className="text-blue-700 font-bold" to="/login">
                    Login{" "}
                  </Link>{" "}
                </p>
                <p className="text-center my-2">OR</p>
              </div>
              <div>
                <div className="p-3  border rounded-2xl mb-3 flex justify-center gap-3 ">
                  <FcGoogle className="text-2xl"></FcGoogle>
                  <span className="font-semibold">
                    Sign in with Google
                  </span>{" "}
                </div>
                <div className="p-3  border rounded-2xl mb-3 flex justify-center gap-3 ">
                  <FaGithub className="text-2xl"></FaGithub>
                  <span className="font-semibold">
                    Sign in with Google
                  </span>{" "}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
