import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import Auth from '../../../assets/Firebase/firebase.config';
import Swal from 'sweetalert2';
const provider = new GoogleAuthProvider();

const Login = () => {
    const navigate = useNavigate();
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(Auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user, 'user successfully login');
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully user login",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/')

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage, errorCode);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            });

    }

    // google login
    const handleGoogleLogin = () => {
        signInWithPopup(Auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(user, token);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully user login",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/')
            }).catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                console.log(errorMessage);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            });
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="">
                <div className="card shrink-0 w-full md:w-96 max-w-sm  shadow-2xl  bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
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
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className="text-center">New our website?please <NavLink to="/register"><span className="font-bold text-green-700 border-b-4">Register</span></NavLink></p>

                    </form>
                    {/* another login part */}
                    <div className="flex flex-col gap-2 mx-auto">
                        <button onClick={handleGoogleLogin} className="btn mb-4 bg-yellow-400 w-auto mx-auto">Google Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;