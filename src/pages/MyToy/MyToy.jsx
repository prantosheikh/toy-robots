import { useContext, useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const MyToy = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
  const [toys, setToys] = useState([]);
  console.log(toys);

  const uri = `https://toy-robot-server.vercel.app/mytoy?email=${user?.email}`;

  useEffect(() => {
    fetch(uri)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);



  const handlerDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-robot-server.vercel.app/toyall/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your Toy has been deleted.", "success");
              const remaining = toys.filter((toys) => toys._id !== id);
              setToys(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="overflow-x-auto w-full my-16">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Image</th>
            <th>Toy Name</th>
            <th>Sub Sategory</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>Details</th>
          </tr>
        </thead>

        {toys.map((toy) => (
          <tbody key={toy?._id}>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={toy.photoURL}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                {" "}
                <div>
                  <div className="font-bold">{toy?.toyName}</div>
                </div>
              </td>
              <td>
                {toy.subToyCategory.map((subtoy, i) => (
                  <td key={i}>
                    <span>{subtoy?.value}</span>
                  </td>
                ))}
              </td>
              <td>{toy.price}</td>
              <td className="text-centert">{toy.availableQuantity}</td>
              <td>
                <div>
                  <td>
                    <Link to={`/updatetoy/${toy._id}`}>
                      <AiOutlineEdit className="text-2xl text-blue-800 cursor-pointer"></AiOutlineEdit>
                    </Link>
                  </td>
                  <td>
                    <AiOutlineDelete
                      onClick={() => handlerDelete(toy._id)}
                      className="text-2xl text-red-500 cursor-pointer"
                    ></AiOutlineDelete>
                  </td>

                  <td className="text-center">
                    <label htmlFor="my-modal-5" className="btn btn-xs">
                      Details
                    </label>
                  </td>
                </div>
              </td>
            </tr>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box w-11/12 max-w-5xl">
                <div className="hero bg-base-200">
                  <div className="hero-content flex-col gap-24 lg:flex-row">
                    <img
                      src={toy.photoURL}
                      className="max-w-sm rounded-lg shadow-2xl"
                    />

                    <div>
                      <h1 className="text-5xl font-bold mb-6">
                        {toy?.toyName}
                      </h1>
                      <h1 className="text-2xl font-semibold ">
                        {toy?.youName}
                      </h1>
                      <h1 className="text-lg font-semibold mb-5">
                        {toy?.email}
                      </h1>

                      {toy?.subToyCategory?.map((subtoy, i) => (
                        <span className="border p-2 " key={i}>
                          {" "}
                          <span>{subtoy?.value}</span>
                        </span>
                      ))}

                      <div className="flex gap-11">
                        <p className="mt-4">Price: ${toy?.price}</p>
                        <p className="mt-4 ms-2">
                          {toy?.rating}{" "}
                          <Rating
                            placeholderRating={toy?.number}
                            emptySymbol={
                              <FaRegStar className="text-yellow-500"></FaRegStar>
                            }
                            readonly
                            placeholderSymbol={
                              <FaStar
                               className="text-amber-500"
                               
                              ></FaStar>
                            }
                            fullSymbol={<FaStar></FaStar>}
                          />
                        </p>
                      </div>
                      <p className="py-6">
                        {" "}
                        Available Quantity {toy?.availableQuantity}
                      </p>
                      <p className="">{toy?.description}</p>
                    </div>
                  </div>
                </div>

                <div className="modal-action">
                  <label htmlFor="my-modal-5" className="btn">
                    Ok
                  </label>
                </div>
              </div>
            </div>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default MyToy;
