import useAuth from "../../Hooks/useAuth";
import TodoList from "./TodoList";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="bg-gray-800 h-[100vh] text-white p-4">
        {user && (
          <div className="flex items-center space-x-4 mb-4">
            {user.photoURL && (
              <img
                src={user.photoURL}
                alt={user.displayName}
                className="w-8 h-8 rounded-full"
              />
            )}
            <span>{user.displayName}</span>
          </div>
        )}

        <ul className="space-y-2">
          <li>
            <Link to="/" className="text-white hover:underline">
              Home
            </Link>
          </li>
          {/* Add more sidebar links as needed */}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <div>
          {/* Content specific to the dashboard */}
          {/* ... */}
        </div>
        <div>
          {/* TodoList component */}
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
