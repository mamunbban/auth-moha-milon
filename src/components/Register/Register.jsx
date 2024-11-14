import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {
    const navigate = useNavigate();

    const {createUser, signInGoogle} = useContext(AuthContext);
 
    const handleRegister = e =>{
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value; 
        const password = e.target.password.value;

        console.log(name, email, password);

        //Create User
        createUser(email,password)
        .then(result =>{
            console.log(result.user);
            e.target.reset()
            navigate('/')
        })
        .catch(error =>{
            console.log('ERROR', error.message);
        })

    }
    const handlesignInWithGoogle = ()=>{
        signInGoogle()
        .then(result =>{
            console.log(result.user);
            navigate('/')
        })
        .catch(error =>{
            console.log('ERROR', error.message);

        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className='my-4 mx-4'>
                       Already have an account? please <Link to='/login'>Login.</Link>
                    </p>
                    <p>
                    <button onClick={handlesignInWithGoogle} className='btn'>Sign in with google</button>
                </p>
                </div>
               
            </div>
        </div>
    );
};

export default Register;