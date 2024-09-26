import React from "react";
import { useForm } from "react-hook-form";
import axios from "../../utils/axios.js"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const user = {
      fullname: data.name,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("/user/signup", user)
      .then((res) => {
        if (res.data) {
          toast.success('Signed up in successfully!',{
            position: "top-center",
          });
        }
        document.getElementById("my_modal_4").close() ;
        document.getElementById("my_modal_3").close() ;
        setTimeout(()=>{
          window.location.reload() ;
          localStorage.setItem("users", JSON.stringify(res.data.user))
        },1500)
      })
      .catch((err) => {
        if (err.response) {   
          document.getElementById("my_modal_4").close() ;
          document.getElementById("my_modal_3").close() ;
          toast.error("Error : " + err.response.data.message,{
            position: "top-center",
          });
        }
      });
    // console.log(data) ;
  };

  return (
    <div >
      {" "}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-black text-xl mb-10">Signup</h3>
            <label className="w-full " htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-6 py-4 mb-3 mt-2 rounded-md outline-none"
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="w-full text-sm text-red-400">
                This field is required
              </span>
            )}
            <br />
            <br />
            <label className="w-full ">Email</label>
            <input
              className="w-full px-6 py-4 mb-3 mt-2 rounded-md outline-none"
              type="email"
              name="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="w-full text-sm text-red-400">
                This field is required
              </span>
            )}
            <br />
            <br />

            <label className="w-full">Password</label>
            <input
              className="w-full px-6 py-4 mb-3 mt-2 rounded-md outline-none"
              type="password"
              name="password"
              placeholder="Enter your password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="w-full text-sm text-red-400">
                This field is required
              </span>
            )}
            <br />

            <div className="w-full flex justify-between mt-5 text-xs md:text-lg">
              <button className="px-4 py-1 text-sm bg-blue-500   text-white rounded-full">
                Sign up
              </button>
              <p>
                Already registered? <br />
                Press the cross
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Signup;
