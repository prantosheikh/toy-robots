import { useContext, useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const ToyAll = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  
  const [toys, setToys] = useState([]);
  
  const [toySingle, settoySingle] = useState({});


  const singleToy = (id) => {
    console.log(id);
    fetch(`http://localhost:2000/toyall/${id}`)
      .then((res) => res.json())
      .then((toy) => settoySingle(toy));
  };

  useEffect(() => {
    fetch("http://localhost:2000/toyall")
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
         fetch(`http://localhost:2000/toyall/${id}`, {
           method: "DELETE",
         })
         .then((res) => res.json())
           .then((data) => {
             if (data.deletedCount) {
               Swal.fire("Deleted!", "Your file has been deleted.", "success");
               const remaining = toys.filter((toys) => toys._id !== id);
               setToys(remaining)
             }
            
          })

         
       }
       
     });
  }
    const handleViewDetails = () => {
      if (user) {
        // Redirect to the toy details page
        navigate("/toyall");
      } else {
        // Show notification and redirect to the login page
        toast("You have to log in first to view details");
        setTimeout(() => {
          navigate("/login");
        },); 
      }
    };

  const [searchText, setSearchText] = useState([])
  console.log(searchText);


  const handleSearch = () => {
    fetch(`http://localhost:5000/getToyByText/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  };


  return (
    <div className="overflow-x-auto w-full my-20 h-[512px] ">
      
      <div className="form-control mb-7 sticky top-0 z-50 ">
        <div className="input-group w-1/2 ">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Search…"
            name="search"
            className="input input-bordered w-1/2"
          />
          <button onClick={handleSearch} className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
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
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={toy.photoURL}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>

              <td>
                {" "}
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold">{toy?.toyName}</div>
                  </div>
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

                  <td onClick={() => singleToy(toy._id)}>
                    <label
                      onClick={handleViewDetails}
                      htmlFor="my-modal-5"
                      className="btn btn-xs"
                    >
                      Details
                    </label>
                  </td>
                </div>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="hero bg-base-200">
            <div className="hero-content flex-col gap-24 lg:flex-row">
              <img
                src={toySingle.photoURL}
                className="max-w-sm rounded-lg shadow-2xl"
              />

              <div>
                <h1 className="text-5xl font-bold mb-6">
                  {toySingle?.toyName}
                </h1>
                <h1 className="text-2xl font-semibold ">
                  {toySingle?.youName}
                </h1>
                <h1 className="text-lg font-semibold mb-5">
                  {toySingle?.email}
                </h1>

                <div className="flex gap-11">
                  <p className="mt-4">Price: ${toySingle?.price}</p>
                  <p className="mt-4">{toySingle?.rating}</p>
                </div>
                <p className="py-6">
                  {" "}
                  Available Quantity {toySingle?.availableQuantity}
                </p>
                <p className="">{toySingle?.description}</p>
                <button className="btn btn-primary">Get Started</button>
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
    </div>
  );
};

export default ToyAll;
