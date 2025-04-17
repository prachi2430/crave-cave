import React, { useState } from "react";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); // Updates state when user clicks "Sign In"
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center bg-gray-800 p-4">
        <h1 className="text-3xl font-bold text-yellow-500">Crave Cave</h1>
        
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-2 rounded-md bg-gray-700 text-white outline-none"
        />
        
        {/* Sign-In Button */}
        {!isLoggedIn && (
          <button 
            className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-md hover:bg-yellow-600 transition"
            onClick={handleLogin}
          >
            Sign In
          </button>
        )}
      </header>

      {/* Main Content */}
      <div className="flex">
        {/* Side Panel */}
        <nav className="w-64 bg-gray-800 p-6 min-h-screen">
          <ul className="space-y-4">
            <li className="hover:text-yellow-500 cursor-pointer">Home</li>
            <li className="hover:text-yellow-500 cursor-pointer">Menu</li>
            <li className="hover:text-yellow-500 cursor-pointer">About Us</li>
            <li className="hover:text-yellow-500 cursor-pointer">Contact</li>
          </ul>
        </nav>

        {/* Content Section */}
        <main className="flex-1 p-6">
          <h2 className="text-4xl font-bold">Welcome to Crave Cave!</h2>
          <p className="mt-4 text-lg text-gray-300">
            Your destination for delicious cravings!
          </p>
        </main>
      </div>
    </div>
  );
};

export default Home;

