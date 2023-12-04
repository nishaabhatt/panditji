import { useState } from 'react';
import { db } from "../../../src/firebase/firebase";
import { collection, query, where, getDocs, doc, updateDoc } from "firebase/firestore";
import Layout from "../../../src/components/dashboadPanel/LayoutS";

const SuperAdmin = () => {
  const [email, setEmail] = useState('');
  const [selectedRole, setSelectedRole] = useState('user');
  const [error, setError] = useState(null);
  const [documentId, setDocumentId] = useState(null);

  const handleRoleUpdate = async () => {
    setError(null);

    if (!email) {
      setError('Email is required');
      return;
    }

    try {
      const signUpCollection = collection(db, "SignUp");

      // Query for the document based on the email
      const userQuery = query(signUpCollection, where('userEmail', '==', email));
      const querySnapshot = await getDocs(userQuery);

      if (querySnapshot.empty) {
        setError('User with this email does not exist');
        return;
      }

      const userDoc = querySnapshot.docs[0];
      const userId = userDoc.data().userId;
      const userName = userDoc.data().userName;

      // Set the Document ID in the state
      setDocumentId(userDoc.id);

      console.log('User ID:', userId);
      console.log('User Name:', userName);
      console.log('Document ID:', userDoc.id);

      // Now you can use the Document ID for updating the document
      await updateDoc(doc(signUpCollection, userDoc.id), {
        role: selectedRole,
      });

      // Clear the form fields
      setEmail('');
      setSelectedRole('user');

      alert('Role updated successfully');
    } catch (error) {
      console.error('Error updating role:', error.message);
      setError('Error updating role');
    }
  };

  return (
    <Layout>
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md my-20">
      <h2 className="text-2xl font-semibold mb-4">Super Admin Page</h2>
      <form className="space-y-4">
        <label className="block text-gray-700">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />

        <label className="block text-gray-700">Select Role:</label>
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="admin">Admin</option>
          <option value="super-admin">Super Admin</option>
          <option value="user">User</option>
          <option value="panditji">Panditji</option>
        </select>

        {error && <p className="text-red-500">{error}</p>}

        <button
          type="button"
          onClick={handleRoleUpdate}
          className="w-full px-4 py-2 bg-secondary text-white rounded-md focus:outline-none hover:bg-primary"
        >
          Update Role
        </button>
      </form>
    </div>
    </Layout>
  );
};

export default SuperAdmin;

