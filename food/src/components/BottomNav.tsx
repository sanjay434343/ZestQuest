import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home as HomeIcon, ChefHat } from 'lucide-react';

export function BottomNav({ loaderActive }: { loaderActive: boolean }) {
  const location = useLocation();
  const responseGenerated = true; // assuming this variable is defined somewhere in your code

  return (
    <div className={`fixed bottom-0 left-0 right-0 bg-gray-100 shadow-lg z-0 mb-4 mx-4 mt-4 pb-1`} style={{ margin: '0 16px', borderRadius: '10px', marginBottom: '16px' }}>
      <div className="flex justify-around items-center h-12 mt-4">
        <Link to="/" className={`flex flex-col items-center space-y-1 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out ${
          location.pathname === '/' ? 'text-orange-500' : 'text-black'
        }`}>
          <HomeIcon className="w-6 h-6" />
          <span className="text-xs">Home</span>
        </Link>
        <Link to="/recipe" className={`flex flex-col items-center space-y-1 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out ${
          location.pathname === '/recipe' ? 'text-orange-500' : 'text-black'
        }`}
          onClick={(e) => {
            if (!responseGenerated) {
              e.preventDefault();
              alert('Content not generated. Please generate first!');
            }
          }}
        >
          <ChefHat className="w-6 h-6" />
          <span className="text-xs">Recipes</span>
        </Link>
        {/* Add more buttons as needed */}
      </div>
    </div>
  );
}