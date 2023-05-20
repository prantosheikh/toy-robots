import { useContext, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import login from "../../assets/images/login.jpg";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const { loginUser, googleLogin, githubLogin } = useContext(AuthContext);
  const [error, setError] = useState(" ");
  const [success, setSuccess] = useState(" ");

  const handlerSocialLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handlerGithubLogin = () => {
    githubLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handlerLogin = (event) => {
    event.preventDefault()
    setError('')
    setSuccess('')
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value
    console.log(email, password);
    
    loginUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("Your login was successful");
      })
      .catch((error) => {
        // Handle login error
        if (error.code === "auth/wrong-password") {
          // Display generic error message for wrong password
          setError("Invalid Password. Please try again.");
        } else{
          // Handle other errors
          setError("User not found. Please check your email and try again.", error.message);
        }
      });
}

  
  


  return (
    <div className="hero border-spacing-0 w-full my-11">
      <div className="hero-content flex-col lg:flex-row-reverse md:gap-7">
        <div className="text-center lg:text-left lg:w-1/2">
          <img src={login} alt="" />
        </div>
        <div className="card flex-shrink-0 shadow-2xl bg-base-100 lg:w-2/5">
          <form onSubmit={handlerLogin}>
            <div className="card-body">
              <h4 className="text-4xl text-center font-bold my-8">Login </h4>
              <div>
                <div
                  onClick={handlerSocialLogin}
                  className="p-3  border rounded-2xl mb-3 flex justify-center gap-3 cursor-pointer"
                >
                  <FcGoogle className="text-2xl"></FcGoogle>
                  <span className="font-semibold">
                    Sign in with Google
                  </span>{" "}
                </div>
                <div
                  onClick={handlerGithubLogin}
                  className="p-3  border rounded-2xl mb-3 flex justify-center gap-3 cursor-pointer"
                >
                  <FaGithub className="text-2xl"></FaGithub>
                  <span className="font-semibold">
                    Sign in with Google
                  </span>{" "}
                </div>
              </div>
            
              <div className="divider"> Or sign in with Email </div>
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
                  className="input input-bordered"
                />
                <label className="label">
                  <p className="text-red-600">{error}</p>
                  <p className="text-green-600">{success}</p>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
                <p className="mt-2">
                  Toy robots new{" "}
                  <Link className="text-blue-700 font-bold" to="/signup">
                    {" "}
                    SignUp
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
