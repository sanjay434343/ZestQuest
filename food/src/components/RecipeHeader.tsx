import React from 'react';
import { ChefHat } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function RecipeHeader() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-orange-400 to-red-500 p-4 flex items-center justify-center absolute top-0 left-0 right-0 mb-4">
      <div className="flex justify-center w-full">
        <ChefHat className="w-10 h-10 text-white mr-4" />
        <h1 className="text-2xl font-bold text-white">Your Recipe</h1>
      </div>
    </div>
  );
}