// Banner.jsx

import { useNavigate } from "react-router-dom";
import planner from "../../assets/planner.png";

const Banner = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    // Redirect to the login page
    navigate("/login");
  };

  return (
    <div className="flex justify-between container mx-auto">
      {/* Content */}
      <div className="flex flex-col justify-center items-center p-8">
        <h1 className="text-4xl font-bold mb-4">Your Task Planner</h1>
        <p className="text-lg mb-8">
          Organize your tasks efficiently with our planner app.
        </p>
        <button
          onClick={handleExploreClick}
          className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded"
        >
          Lets Explore
        </button>
      </div>
      <div>
        <img src={planner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
