import { useParams } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateToy = () => {

    const updateToy = useParams()
    console.log(updateToy.id);


  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const availableQuantity = form.availableQuantity.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const update = { name, price, availableQuantity, rating, description };

    fetch(`https://toy-robot-server.vercel.app/updatetoy/${updateToy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
        .then((data) => {
            if (data.modifiedCount === 1) {
              Swal.fire({
                icon: "success",
                title: "Updated Toys",
              });
          }
      });
  };

  return (
    <div className="border border-blue-800 mt-12 mx-7 p-9">
      <h1 className="text-4xl text-center font-semibold">Update Toy</h1>
      <form onSubmit={handleUpdate}>
        <div className="flex gap-7 my-5">
          <div className="w-1/2">
            <label className="label">
              <span className="label-text">Toy Name</span>
            </label>
            <input
              className="border p-3 w-full"
              placeholder="Toy Name"
              name="name"
              required
            />
          </div>
          <div className="w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              className="border p-3 w-full"
              placeholder="Photo URL"
              name="price"
              //   required
            />
          </div>
        </div>
        <div className="flex gap-7">
          <div className="w-1/2">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              className="border p-3 w-full"
              placeholder="quantity"
              name="availableQuantity"
              //   required
            />
          </div>
          <div className="w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              className="border p-3 w-full"
              placeholder="Rating"
              name="rating"
              //   required
            />
          </div>
        </div>
        <div className="flex gap-7">
          <div className="w-full">
            <input
              className="border p-3 w-full h-40 mt-5"
              placeholder="Description"
              type="textarea"
              name="description"
              //   required
            />
          </div>
        </div>
        <input
          className="btn-block bg-blue-700 py-3 my-4 text-white font-bold"
          type="submit"
          value="Update"
        />
      </form>
    </div>
  );
};

export default UpdateToy;
