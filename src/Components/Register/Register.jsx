import { useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
  const { createUser, updateUser, setLoading, signInWithGoogle } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    displayName: '',
    photoURL: '', // New field for photo URL
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { user } = await createUser(formData.email, formData.password);
      await updateUser(user, formData.displayName, formData.photoURL);
      setLoading(false);
    } catch (error) {
      console.error('Registration error:', error.message);
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      await signInWithGoogle();
      setLoading(false);
    } catch (error) {
      console.error('Google Sign-In error:', error.message);
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Register</h2>

        {/* Registration Form */}
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label htmlFor="displayName" className="block text-gray-700 text-sm font-bold mb-2">
              Display Name
            </label>
            <input
              type="text"
              id="displayName"
              name="displayName"
              value={formData.displayName}
              onChange={handleChange}
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>

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

          <div className="mb-4">
            <label htmlFor="photoURL" className="block text-gray-700 text-sm font-bold mb-2">
              Photo URL
            </label>
            <input
              type="text"
              id="photoURL"
              name="photoURL"
              value={formData.photoURL}
              onChange={handleChange}
              className="border rounded w-full py-2 px-3"
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
            Register
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
      </div>
    </div>
  );
};

export default Register;
