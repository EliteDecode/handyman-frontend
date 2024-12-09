import facebook from "@/assets/icons/facebook.png";
import google from "@/assets/icons/google.png";
const LoginFooter = () => {
  return (
    <div className="mt-6 flex flex-col items-center justify-center">
      <span className="text-xs lg:text-lg">Or Login with</span>
      <div className="flex gap-4 items-center justify-center mt-4">
        <img src={facebook} alt="facebook" className="w-6 h-6 lg:w-8 lg:h-8 cursor-pointer" />
        <img src={google} alt="facebook" className="w-6 h-6 lg:w-8 lg:h-8 cursor-pointer" />
      </div>
    </div>
  );
};

export default LoginFooter;
