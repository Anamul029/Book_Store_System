import { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import { Helmet } from "react-helmet-async";

const Register = () => {
    const { createUser, UpdateProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const axiosPublic = UseAxiosPublic()
    // register system
    const handleRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        // console.log(name,email,photo,password)

        // user Registration system
        createUser(email, password)
            .then(res => {
                console.log(res.user)
                // update profile
                UpdateProfile(name, photo)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Succesfully User Created",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/')

            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="hero min-h-screen flex flex-row-reverse justify-evenly bg-blue-50">
            <Helmet>
                <title>Building Management || register</title>
            </Helmet>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <input type="text" name="photo" placeholder="photoURL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <p className="text-center">Already have an account?please <NavLink to="/login"><span className="font-bold text-green-700 border-b-4">Login</span></NavLink></p>
                </form>

            </div>
            <div>
                <img className="h-[550px] w-[450px]" src="data:image/jpeg;base64,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" alt="" />
            </div>

        </div>
    );
};

export default Register;