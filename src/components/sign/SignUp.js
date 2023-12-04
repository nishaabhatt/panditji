import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { FiEye, FiEyeOff } from 'react-icons/fi'; 
import Link from "next/link";
import { db } from "../../firebase/firebase";
import { collection, addDoc, setDoc } from "firebase/firestore";

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = async () => {
    setError(null);

    if (!name || !email || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);

    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const userId = user.uid;
      const userEmail = user.email;

      const userName = name;

     

      const added = await addDataToFireStore(userId, userEmail, userName);
        if(added) {
            setName(""),
            setEmail(""),
            setPassword(""),
            setConfirmPassword(""),

           alert ("Data stored to database");
        }

      console.log('User signed up successfully! UID:', userId, 'Email:', userEmail, 'Name: ', userName);
    } catch (error) {
      console.error('Error signing up:', error.message);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  async function addDataToFireStore(userId, userEmail, userName){
    try{
      const docRef = await addDoc(collection(db, "SignUp"), {
        userId: userId,
        userEmail: userEmail,
        userName: userName,
        role: "user",        
      });
      console.log("first", docRef.id);
      return true;
    } catch (error) {
      console.error("error adding document", error)
      return false;
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
      <form className="space-y-4">
        <label className="block text-gray-700">Name:</label>
        <input
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />

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
 
        <label className="block text-gray-700">Confirm Password:</label>
        <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
          onClick={handleSignUp}
          className="w-full px-4 py-2 bg-secondary text-white rounded-md focus:outline-none hover:bg-primary"
          disabled={isLoading}
        >
          {isLoading ? 'Signing Up...' : 'Sign Up'}
        </button>
        <p>If already a user? <Link href="./signin"> SignIn</Link></p>
      </form>
    </div>
  );
};

export default SignUp;

