import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { FiEye, FiEyeOff } from 'react-icons/fi'; 
import Link from "next/link";

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = async () => {

    if ( !email || !password ) {
        setError('All fields are required');
        return;
      }

    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User signed in successfully!');
    } catch (error) {
      console.error('Error signing in:', error.message);
    } 
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md my-10">
      <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
      <form className="space-y-4">
        

        <label className="block text-gray-700">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />

        <label className="block text-gray-700">Password:</label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <span
            className="absolute top-2 right-3 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </span>
        </div>
 
        
        

        {error && <p className="text-red-500">{error}</p>}

        <button
          type="button"
          onClick={handleSignIn}
          className="w-full px-4 py-2 bg-secondary text-white rounded-md focus:outline-none hover:bg-primary"
          disabled={isLoading}
        >
          {isLoading ? 'Signing In...' : 'Sign In'}
        </button>

        <p>If new user? create account <Link href="./signup" className="text-primary"> Sign up</Link> </p>
      </form>
    </div>
  );
};

export default SignIn;
