import React from 'react';

interface RecipeOutputProps {
  recipe: string;
}

export function RecipeOutput({ recipe }: RecipeOutputProps) {
  const formatRecipe = (recipeText) => {
    if (!recipeText || recipeText === null) {
      return "No recipe details available.";
    }
    return recipeText.split('\n').map((line, index) => {
      const boldPattern = /\*\*(.*?)\*\*/g;
      const formattedLine = line.replace(boldPattern, '<span class="text-orange-500 font-bold">$1</span>');
      return <p key={index} dangerouslySetInnerHTML={{ __html: formattedLine }} />;
    });
  };

  return (
    <div className="prose prose-lg">
      {formatRecipe(recipe)}
    </div>
  );
}