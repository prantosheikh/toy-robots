import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
const AddToy = () => {
    const {user} = useContext(AuthContext)
  const [selectedOption, setSelectedOption] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
    const onSubmit = (data) => {
        data.subToyCategory = selectedOption;
        console.log(data)

        fetch("https://toy-robot-server.vercel.app/addToy", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            if (result.acknowledged === true) {
              Swal.fire({
                icon: "success",
                title: "Added Complete",
              });
            }
          });
    console.log(data);

          
    };
    console.log(watch("example"));
    


  const options = [
    { value: "Marvel", label: "Marvel" },
    { value: "Avengers", label: "Avengers" },
    { value: "StarWars", label: "StarWars" },
    { value: "Transformers", label: "Transformers" },
  ];
  return (
    <div className="w-3/4 mt-6 mx-auto">
      {" "}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-7">
          <div className="w-1/2">
            <label className="label">
              <span className="label-text">Toy Name</span>
            </label>
            <input
              className="border p-3 w-full"
              placeholder="Toy Name"
              {...register("toyName")}
              required
            />
          </div>
          <div className="w-1/2">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              className="border p-3 w-full"
              placeholder="Photo URL"
              {...register("photoURL", { required: true })}
              required
            />
          </div>
        </div>
        <div className="flex gap-7">
          <div className="w-1/3">
            <label className="label">
              <span className="label-text">Available quantity</span>
            </label>
            <input
              className="border p-3 w-full"
              placeholder="Available Quantity"
              {...register("availableQuantity", { required: true })}
              type="number"
              required
            />
          </div>

          <div className="w-1/3">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              className="border p-3 w-full"
              placeholder="Price"
              {...register("price", { required: true })}
              required
            />
          </div>
          <div className="w-1/3">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              className="border p-3 w-full"
              placeholder="Rating"
              {...register("rating", { required: true })}
              required
            />
          </div>
        </div>
        <div className="flex gap-7">
          <div className="w-1/2">
            <label className="label">
              <span className="label-text">You Name </span>
            </label>
            <input
              className="border p-3 w-full"
              placeholder="You Name"
              value={user?.displayName}
              {...register("youName", { required: true })}
            />
          </div>
          <div className="w-1/2">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              className="border p-3 w-full"
              placeholder="email"
              value={user?.email}
              {...register("email", { required: true })}
            />
          </div>
        </div>
        <div className="flex gap-7">
          <div className="w-full">
            <label className="label">
              <span className="label-text">Sub Category</span>
            </label>
            {/* <input
              className="border p-3 w-full"
              placeholder="Sub Category"
              {...register("subCategory")}
            /> */}
            <CreatableSelect
              className="w-75"
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              isMulti
              required
            />
          </div>
        </div>
        <div className="">
          <div className="">
            <label className="label">
              <span className="label-text"></span>
            </label>
            <input
              className="border h-44 p-3 w-full"
              placeholder="Description"
              {...register("description", { required: true })}
              required
            />
          </div>
        </div>

        {errors.exampleRequired && <span>This field is required</span>}

        <input
          className="btn-block bg-blue-700 py-3 my-4 text-white font-bold"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddToy;
