import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast} from 'react-toastify';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
  const { signIn, signInWithGoogle, setLoading } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await signIn(formData.email, formData.password);
      setLoading(false);
      // Show success toast
      toast.success('Login successful!');
    } catch (error) {
      console.error('Login error:', error.message);
      setLoading(false);
      // Show error toast
      toast.error('Login failed. Please check your credentials.');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      await signInWithGoogle();
      setLoading(false);
      // Show success toast
      toast.success('Google Sign-In successful!');
    } catch (error) {
      console.error('Google Sign-In error:', error.message);
      setLoading(false);
      // Show error toast
      toast.error('Google Sign-In failed. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Login</h2>

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 mr-2"
          >
            Login
          </button>

          {/* Google Sign-In Button */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
          >
            Sign In with Google
          </button>
        </form>

        <p className="mt-4 text-sm">
          Dont have an account? <Link to="/register" className="text-blue-500">Register here</Link>
        </p>

        
      </div>
    </div>
  );
};

export default Login;
