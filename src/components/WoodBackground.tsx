import loginBackgroundImage from "../assets/login-img.jpg";

const WoodBackground = () => {
  return (
    <div className="absolute">
      <img src={loginBackgroundImage} alt="" className="w-full min-h-screen" />
      <div className="absolute inset-0 object-none bg-black bg-opacity-50"></div>
    </div>
  );
};

export default WoodBackground;
