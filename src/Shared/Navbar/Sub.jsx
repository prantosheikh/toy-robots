import { useEffect, useState } from "react";
import {
    FaRegStar,
    FaStar
} from "react-icons/fa";
import Rating from "react-rating";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const Sub = () => {
  const [toys, setToy] = useState([]);
  useEffect(() => {
    fetch("ToyRobots.json")
      .then((res) => res.json())
      .then((data) => {
        setToy(data);
      });
  }, []);

  return (
    <div>
      <h3 className="text-4xl my-24 text-center font-bold">Sub Category</h3>
      <Tabs>
        <TabList className="grid grid-cols-3 my-11 text-center border p-4">
          <Tab>Spider Man</Tab>
          <Tab>Transformers</Tab>
          <Tab>Avengers</Tab>
        </TabList>

        <TabPanel className="lg:flex lg:justify-between mx-7">
          {toys.slice(0, 3).map((toy, i) => (
            <div key={i} className="card card-compact  bg-base-100 shadow-xl">
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
                  <button className=" btn-block text-lg bg-blue-600 py-3 text-white font-semibold">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </TabPanel>
        <TabPanel className="lg:flex lg:justify-between mx-7">
          {toys.slice(4, 7).map((toy, i) => (
            <div key={i} className="card card-compact  bg-base-100 shadow-xl">
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
                <div className="card-actions justify-end">
                  <button className=" btn-block text-lg bg-blue-600 py-3 text-white font-semibold">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </TabPanel>
        <TabPanel className="lg:flex lg:justify-between mx-7">
          {toys.slice(8, 11).map((toy, i) => (
            <div key={i} className="card card-compact   bg-base-100 shadow-xl">
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
                  <button className=" btn-block text-lg bg-blue-600 py-3 text-white font-semibold">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Sub;
