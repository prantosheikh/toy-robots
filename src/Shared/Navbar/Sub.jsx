import { useContext, useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useLocation, useNavigate } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../provider/AuthProvider";

const Sub = () => {
  const [toys, setToy] = useState([]);
    const navigate = useNavigate();
    const { user } = useContext(AuthContext)
    const location = useLocation()
    console.log(location);
  useEffect(() => {
    fetch("http://localhost:2000/subCategory")
      .then((res) => res.json())
      .then((data) => {
        setToy(data);
      });
  }, []);

  const handleViewDetails = () => {
    if (user) {
      // Redirect to the toy details page
      navigate("/toy-details");
    } else {
      // Show notification and redirect to the login page
      toast("You have to log in first to view details");
      setTimeout(() => {
        navigate("/login");
      }, 2000); // Delay the navigation after 2 seconds 
    }
};

  return (
    <div>
      <h3 className="text-4xl my-24 text-center font-bold">Sub Category</h3>
      <Tabs>
        <TabList className="grid grid-cols-3 my-11 text-center border p-4">
          <Tab className="cursor-pointer"> Transformers</Tab>
          <Tab className="cursor-pointer">Spider Man</Tab>
          <Tab className="cursor-pointer">Avengers</Tab>
        </TabList>

        <TabPanel className="lg:flex lg:justify-between gap-16 mx-7">
          {toys.slice(4, 7).map((toy, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-duration="2000"
              className="card card-compact rounded-none pb-6  bg-base-100 shadow-xl"
            >
              <figure>
                <img width={400} src={toy.picture} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl">{toy.name}</h2>
                <div className="flex justify-around mx-4">
                  <p className="text-lg font-semibold"> Price ${toy.price}</p>
                  <span className="text-lg font-semibold">
                    {toy.rating}
                    <Rating
                      placeholderRating={toy?.rating}
                      emptySymbol={
                        <FaRegStar className="text-blue-700"></FaRegStar>
                      }
                      placeholderSymbol={
                        <FaStar className="text-orange-600"></FaStar>
                      }
                      fullSymbol={<FaStar></FaStar>}
                      readonly
                    />
                  </span>
                </div>
                <div className="card-actions justify-end ">
                  <button
                    onClick={handleViewDetails}
                    className=" btn-block text-lg bg-blue-600 py-3 text-white font-semibold mt-7"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </TabPanel>
        <TabPanel className="lg:flex lg:justify-between mx-7 gap-16">
          {toys.slice(0, 3).map((toy, i) => (
            <div
              key={i}
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000"
              className="card card-compact rounded-none pb-6 bg-base-100 shadow-xl"
            >
              <figure>
                <img width={400} src={toy.picture} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl">{toy.name}</h2>
                <div className="flex justify-around mx-4">
                  <p className="text-lg font-semibold"> Price ${toy.price}</p>
                  <span className="text-lg font-semibold">
                    {toy.rating}{" "}
                    <Rating
                      placeholderRating={toy?.rating}
                      emptySymbol={
                        <FaRegStar className="text-blue-700"></FaRegStar>
                      }
                      placeholderSymbol={
                        <FaStar className="text-orange-600"></FaStar>
                      }
                      fullSymbol={<FaStar></FaStar>}
                      readonly
                    />
                  </span>
                </div>
                <div className="card-actions justify-end">
                  <button
                    onClick={handleViewDetails}
                    className=" btn-block text-lg bg-blue-600 py-3 text-white font-semibold mt-7"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </TabPanel>
        <TabPanel className="lg:flex lg:justify-between gap-16 mx-7">
          {toys.slice(8, 11).map((toy, i) => (
            <div
              key={i}
              data-aos="fade-left"
             
        
              data-aos-duration="500"
              className="card card-compact rounded-none pb-6   bg-base-100 shadow-xl"
            >
              <figure>
                <img width={400} src={toy.picture} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl">{toy.name}</h2>
                <div className="flex justify-around mx-4">
                  <p className="text-lg font-semibold"> Price ${toy.price}</p>
                  <span className="text-lg font-semibold">
                    {toy.rating}{" "}
                    <Rating
                      placeholderRating={toy?.rating}
                      emptySymbol={
                        <FaRegStar className="text-blue-700"></FaRegStar>
                      }
                      placeholderSymbol={
                        <FaStar className="text-orange-600"></FaStar>
                      }
                      fullSymbol={<FaStar></FaStar>}
                      readonly
                    />
                  </span>
                </div>
                <div className="card-actions justify-end">
                  <button
                    onClick={handleViewDetails}
                    className=" btn-block text-lg bg-blue-600 py-3 mt-7 text-white font-semibold"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </TabPanel>
        <ToastContainer />
      </Tabs>
    </div>
  );
};

export default Sub;
