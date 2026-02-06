import React from 'react';

const Profile = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <p className="text-gray-600">This is a placeholder profile page. You can update your name, email and avatar here.</p>
      <div className="mt-6 max-w-md">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input className="input-field mt-1" placeholder="Your name" />

        <label className="block text-sm font-medium text-gray-700 mt-4">Email</label>
        <input className="input-field mt-1" placeholder="you@example.com" />

        <div className="mt-6">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
