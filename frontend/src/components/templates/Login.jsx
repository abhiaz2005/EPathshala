import React from "react";
import { Link } from "react-router-dom";
import Signup from "./Signup";
import { useForm } from "react-hook-form";
import axios from "../../utils/axios.js"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const user = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("/user/login", user)
      .then((res) => {
        if (res.data) {
          toast.success('Logged in successfully!',{
            position: "top-center",
          });
          document.getElementById("my_modal_3").close() ;
          setTimeout(()=>{
            window.location.reload() ;
            localStorage.setItem("users", JSON.stringify(res.data.user));
          },1000)
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error : " + err.response.data.message,{
            position: "top-center",
          });
        }
      });
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-black text-xl mb-10">Login</h3>
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

            <div className="w-full flex justify-around mt-5">
              <button className="px-3 py-1 bg-blue-500 text-white rounded-full">
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link
                  onClick={() =>
                    document.getElementById("my_modal_4").showModal() 
                  }
                  className="text-blue-500 underline"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>

      <Signup />
    </div>
  );
};

export default Login;
