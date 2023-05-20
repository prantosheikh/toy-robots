import { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ToyAll = () => {
  const [toys, setToys] = useState([]);
  const [toySingle, settoySingle] = useState({});
  console.log(toys);

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




  return (
    <div className="overflow-x-auto w-full my-20 h-[512px]">
      {}
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
                    <AiOutlineDelete onClick={() => handlerDelete(toy._id)} className="text-2xl text-red-500 cursor-pointer"></AiOutlineDelete>
                  </td>

                  <td onClick={() => singleToy(toy._id)}>
                    <label htmlFor="my-modal-5" className="btn btn-xs">
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

                {/* {toySingle.subToyCategory.map((subtoy, i) => (
                  <span className="border p-2 " key={i}>
                    {" "}
                    
                    <span>{subtoy?.value}</span>
                  </span>
                ))} */}

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
