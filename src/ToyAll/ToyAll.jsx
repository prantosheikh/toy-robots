import { useEffect, useState } from "react";

const ToyAll = () => {
  const [toys, setToys] = useState([]);
  


  useEffect(() => {
    fetch("http://localhost:2000/toyall")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  return (
    <div className="overflow-x-auto w-full my-20">
      {}
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Available Quantity</th>
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
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{toy?.toyName}</div>
                  </div>
                </div>
              </td>
             
              <td>
                {toy.subToyCategory.map((subtoy, i) => (
                  <td key={i}>
                    <span>{subtoy.value}</span>
                  </td>
                ))}
              </td>

              <td>Purple</td>
              <th>
                <th>
                  <label htmlFor="my-modal-5" className="btn btn-xs">
                    Details
                  </label>
                </th>
              </th>
            </tr>
          </tbody>
        ))}
      </table>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You ve been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyAll;
