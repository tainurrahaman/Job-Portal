import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  const handleWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="divider">OR</div>
      <div className="flex justify-center">
        <button onClick={handleWithGoogle} className="btn m-4">
          SignIn with Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
