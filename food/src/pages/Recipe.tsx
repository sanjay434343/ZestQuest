import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { RecipeHeader } from '../components/RecipeHeader';
import { RecipeOutput } from '../components/RecipeOutput';
import { BottomNav } from '../components/BottomNav';
import { DownloadButton } from '../components/DownloadButton';

export function Recipe() {
  const location = useLocation();
  const [recipe, setRecipe] = useState(location.state?.recipe || null);

  return (
    <div className="min-h-screen bg-white py-12 px-4 relative">
      <div className="max-w-4xl mx-auto">
      
        <RecipeHeader />
        <div className="mb-16" />
        <RecipeOutput recipe={recipe} />
      </div>
      <div className="mb-12" />
      <div className="mb-12" />
      <div className="mb-4" />
      <div className="mb-4" />
      <div className="mb-4" />
      <div className="mb-4" />
      <DownloadButton recipe={recipe} />
      <BottomNav />
    </div>
  );
}