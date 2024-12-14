import React from 'react';
import { ChefHat } from 'lucide-react';

export function Header() {
  return (
    <div className="text-center mb-4 animate-fade-down">
      <ChefHat className="w-16 h-16 mx-auto text-orange-500 mb-4 hover:scale-110 transition-transform" />
      <h1 className="text-4xl font-bold text-orange-500 mb-2">ZestQuest</h1>
      <p className="text-black">Transform your ingredients into delicious recipes</p>
    </div>
  );
}