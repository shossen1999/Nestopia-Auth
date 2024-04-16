import useAuth from "../../hooks/useAuth";


const SocialLogin = () => {
    const { googleLogin,githubLogin } = useAuth();
    return (
        < >
            <div className="divider">
                Continue With
            </div>
            <div className="flex justify-around">
                <button
                onClick={()=>googleLogin()}
                className="btn btn-primary btn-sm btn-outline">Google</button>
                <button
                onClick={()=>githubLogin()}
                className="btn btn-primary btn-sm btn-outline">Github</button>
            </div>

        </>
    );
};

export default SocialLogin;