import React, { useState } from 'react';

const UpdateMe = () => {
  // State for email and name form
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  // State for password form
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleEmailNameUpdate = (e) => {
    e.preventDefault();
    // Add logic to update email and name data
    console.log('Updating email and name:', email, name);
  };

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    // Add logic to update password data
    console.log(
      'Updating password:',
      currentPassword,
      newPassword,
      passwordConfirm
    );
  };

  return (
    <div className="max-w-md inset-0 mx-auto mt-8 p-6 bg-white">
      <h2 className="text-2xl font-semibold mb-4">Update your user data</h2>

      {/* Email and Name Update Form */}
      <form onSubmit={handleEmailNameUpdate} className="mb-8">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border rounded-md p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border rounded-md p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Update Email/Name
        </button>
      </form>

      {/* Password Update Form */}
      <form onSubmit={handlePasswordUpdate}>
        <div className="mb-4">
          <label
            htmlFor="currentPassword"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Current Password
          </label>
          <input
            type="password"
            id="currentPassword"
            className="w-full border rounded-md p-2"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="newPassword"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            className="w-full border rounded-md p-2"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="passwordConfirm"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="passwordConfirm"
            className="w-full border rounded-md p-2"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default UpdateMe;
