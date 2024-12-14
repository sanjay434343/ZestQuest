import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateRecipe } from '../lib/gemini';

import { VideoBackground } from '../components/VideoBackground';
import { Header } from '../components/Header';
import { IngredientForm } from '../components/IngredientForm';
import { ExampleCard } from '../components/ExampleCard';
import { BottomNav } from '../components/BottomNav';

export function Home() {
  const [ingredients, setIngredients] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await generateRecipe(ingredients);
      navigate('/recipe', { state: { recipe: response } });
    } catch (error) {
      console.error('Error generating recipe:', error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden pb-20">
      <VideoBackground opacity={0.3} />
      <div className="relative z-10 container mx-auto px-4 py-12">
        <Header />
        <IngredientForm
          ingredients={ingredients}
          setIngredients={setIngredients}
          onSubmit={handleSubmit}
          loading={loading}
        />
        <ExampleCard />
        {loading && <LoadingState />}
      </div>
      <BottomNav />
    </div>
  );
}