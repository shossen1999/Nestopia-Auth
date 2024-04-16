import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { updateProfile } from "firebase/auth";
import Navbar from "../shared/Navbar/Navbar";
const UpdateProfile = () => {
    const {  user } = useAuth();
    console.log(user);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    const onSubmit = (data) => {
        const { fullName,image } = data;
      
        
        // reset error 
       
      
    
    
                // update profile
                updateProfile(user,{
                    displayName: fullName,
                    photoURL:image
                })
                .then(()=>{
                   reset();
                    
                })
                .catch()
            
           
    };


    return (
        <div>
            <Navbar></Navbar>
               <h2>Hi update</h2>
         {/* <h2>{user.displayName}</h2> */}
         <h3>{user?.displayName}</h3>
         <img src={user?.photoURL} alt="" />
         

         <form onSubmit={handleSubmit(onSubmit)} className="card-body lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"
                            name="name"
                            placeholder="name"
                            className="input input-bordered"
                            {...register("fullName", { required: true })}
                        />
                        {errors.fullName && <span className="text-red-700">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text"
                            name="photo"
                            placeholder="Photo URL"
                            className="input input-bordered"
                            {...register("image")}
                        />
                    </div>
                    
                   
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Update</button>
                    </div>
                   
                </form>

            
        </div>
    );
};

export default UpdateProfile;